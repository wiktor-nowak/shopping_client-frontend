import { type Item } from "../App";

const RenderedItem = ({ name, category, quantity }: Item) => (
  <div style={{ width: "800px", display: "flex", justifyContent: "space-between", height: "40px" }}>
    <p>
      name: <b>{name}</b>
    </p>
    <p>
      category: <b>{category}</b>
    </p>
    <p>
      quantity: <b>{quantity}</b>
    </p>
    <button style={{ height: "20px" }} onClick={() => {}}>
      DELETE
    </button>
  </div>
);

export default RenderedItem;
