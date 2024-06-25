import { type ChangeEvent, ReactElement, useState, type FormEvent, useEffect } from "react";
import Dropdown, { Option } from "react-dropdown";
import { ITEM_URL } from "../utilities/api";
import { type Item } from "../App";

const CATEGORIES: string[] = ["Hygiene", "Groceries", "Drinks", "Home&Decor"];

interface FormItem {
  name: string;
  category: string;
  quantity: number;
}

interface FormProps {
  items: Item[];
  setItems: (items: Item[]) => void;
}

const Form = ({ items, setItems }: FormProps): ReactElement => {
  const [formState, setFormState] = useState<FormItem>({
    name: "",
    category: "",
    quantity: 0
  });

  const onChangeForm = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: name === "quantity" ? Number(value) : value
    }));
  };

  const onChangeFormDropdown = (option: Option) =>
    setFormState((prevFormState) => ({
      ...prevFormState,
      category: option.value
    }));

  const addToList = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (Object.values(formState).every((v) => v)) {
      console.log(formState);
      await fetch(ITEM_URL, {
        method: "POST",
        body: JSON.stringify(formState),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then((res) => res.json())
        .then((res) => setItems([...items, res]));
    }
  };

  return (
    <form onSubmit={(e) => addToList(e)}>
      <label htmlFor="name">Name: </label>
      <input
        name="name"
        placeholder="Define product name"
        className="custom-input"
        onChange={(e) => onChangeForm(e)}
        value={formState.name}
      />
      <label htmlFor="name">Category: </label>
      <Dropdown
        options={CATEGORIES}
        placeholder="Define category"
        className="custom-input"
        onChange={onChangeFormDropdown}
        value={formState.category}
      />
      <label htmlFor="name">Quantity: </label>
      <input
        name="quantity"
        placeholder="Define quantity"
        className="custom-input"
        onChange={(e) => onChangeForm(e)}
        type="number"
        value={formState.quantity}
      />
      <button type="submit">Add to List!</button>
    </form>
  );
};

export default Form;
