import { type ChangeEvent, ReactElement, useState, FormEvent } from "react";
import Select, { SingleValue } from "react-select";
import { ITEM_URL } from "../utilities/api";
import { type Item } from "../App";

const CATEGORIES: any = [
  { value: "Hygiene", label: "Hygiene" },
  { value: "Groceries", label: "Groceries" },
  { value: "Drinks", label: "Drinks" },
  { value: "Home&Decor", label: "Home&Decor" }
];

interface FormItem {
  name: string;
  category: { value: string; label: string };
  quantity: number;
}

interface FormProps {
  items: Item[];
  setItems: (items: Item[]) => void;
}

const Form = ({ items, setItems }: FormProps): ReactElement => {
  const [formState, setFormState] = useState<FormItem>({
    name: "",
    category: { value: "", label: "" },
    quantity: 0
  });

  const onChangeForm = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }));
  };

  const onChangeFormSelect = (selectedItem: SingleValue<any>) =>
    setFormState((prevFormState) => ({
      ...prevFormState,
      category: selectedItem
    }));

  const addToList = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const savedFormValues = {
      item_id: formState.name + formState.category.value,
      name: formState.name,
      category: formState.category.value,
      quantity: formState.quantity
    };
    if (Object.values(formState).every((v) => v)) {
      fetch(ITEM_URL, {
        method: "POST",
        body: JSON.stringify(savedFormValues),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
    }
    setItems([...items, savedFormValues]);
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
      <Select
        options={CATEGORIES}
        name="category"
        placeholder="Define category"
        className="custom-input"
        onChange={(e) => onChangeFormSelect(e)}
        value={formState.category}
        unstyled
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
