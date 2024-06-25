import { ReactElement } from "react";
import { type Item } from "../App";
import Row from "./Row";

interface ListProps {
  items: Item[];
  deleteItem: (id: string) => void;
}

const List = ({ items, deleteItem }: ListProps): ReactElement => (
  <ul>
    {items.map((item) => (
      <li key={item.item_id}>
        <Row item={item} deleteItem={deleteItem} />
      </li>
    ))}
  </ul>
);

export default List;
