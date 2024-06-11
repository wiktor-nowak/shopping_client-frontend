import { ReactElement, ReactNode } from "react";

interface ListProps<Item> {
  items: Item[];
  renderItem: (item: Item) => ReactNode;
}

export interface Item extends Object {
  id: number;
  name: string;
  cat: string;
  quant: number;
}

const List = ({ items, renderItem }: ListProps<Item>): ReactElement => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{renderItem(item)}</li>
    ))}
  </ul>
);

export default List;
