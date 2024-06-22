import { type ChangeEvent, ReactElement, useState } from "react";
import Select, { SingleValue, Props, GroupBase } from "react-select";

const CATEGORIES: any = [
  { value: "hygiene", label: "Hygiene" },
  { value: "groceries", label: "Groceries" },
  { value: "drinks", label: "Drinks" },
  { value: "homedecor", label: "Home&Decor" }
];

interface FormItem {
  name: string;
  category: string;
  quantity: number;
}

const Form = (): ReactElement => {
  const [formState, setFormState] = useState<FormItem>({
    name: "",
    category: "",
    quantity: 0
  });

  const onChangeForm = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }));
  };

  const onChangeFormSelect = (value: SingleValue<string>) =>
    setFormState((prevFormState) => ({
      ...prevFormState,
      category: value as string
    }));

  return (
    <form>
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
    </form>
  );
};

export default Form;
