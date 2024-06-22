import { type Item } from "../App";

const RenderedItem = ({ name, category, quantity }: Item) => (
  <p>
    name: <b>{name}</b> || category: <b>{category}</b> || quantity: <b>{quantity}</b>
  </p>
);

export default RenderedItem;
