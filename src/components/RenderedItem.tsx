import { type Item } from "../App";

const RenderedItem = ({ name, category, quantity }: Item) => (
  <>
    <p>
      name: <b>{name}</b>
    </p>
    <p>
      category: <b>{category}</b>
    </p>
    <p>
      quantity: <b>{quantity}</b>
    </p>
  </>
);

export default RenderedItem;
