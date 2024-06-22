import { ReactElement, ReactNode } from "react";
import { type Item } from "../App";

interface ListProps<Item> {
  items: Item[];
  renderItem: (item: Item) => ReactNode;
}

const List = ({ items, renderItem }: ListProps<Item>): ReactElement => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{renderItem(item)}</li>
    ))}
  </ul>
);

export default List;
