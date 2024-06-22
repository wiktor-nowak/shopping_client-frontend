import { ReactElement } from "react";
import { type Item } from "../App";
import RenderedItem from "./RenderedItem";

interface ListProps<Item> {
  items: Item[];
}

const List = ({ items }: ListProps<Item>): ReactElement => (
  <ul>
    {items.map((item) => (
      <li key={item.item_id}>
        <RenderedItem {...item} />
      </li>
    ))}
  </ul>
);

export default List;
