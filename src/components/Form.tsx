import { ReactElement } from "react";

const Form = (): ReactElement => {
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input name="name" placeholder="Define product name" className="custom-input" />
      <label htmlFor="name">Name: </label>
      <input name="name" placeholder="Define product name" className="custom-input" />
      <label htmlFor="name">Name: </label>
      <input name="name" placeholder="Define product name" className="custom-input" />
    </form>
  );
};

export default Form;
