import React from "react";
import RenderedItem from "./RenderedItem";
import { type Item } from "../App";

interface RowTypes {
  item: Item;
  deleteItem: (id: string) => void;
}

const Row = ({ item, deleteItem }: RowTypes) => {
  const { item_id } = item;
  const deleteMethod = () => {
    deleteItem(item_id);
  };
  return (
    <div
      style={{ width: "800px", display: "flex", justifyContent: "space-between", height: "40px" }}
    >
      <RenderedItem {...item} />
      <button onClick={deleteMethod}>DELETE</button>
    </div>
  );
};

export default Row;
