import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { ITEMS_URL, ITEM_URL_base } from "./utilities/api";

export interface Item extends Object {
  item_id: string;
  name: string;
  category: string;
  quantity: number;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [messageBox, setMessageBox] = useState<string>("");

  const fetchItems = () => {
    fetch(ITEMS_URL)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.warn(err));
  };

  const deleteItem = (id: string): void => {
    fetch(ITEM_URL_base + id, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => {
        setItems(items.filter((item) => item.item_id !== id));
        setMessageBox(res);
        setTimeout(() => {
          setMessageBox("");
        }, 1500);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <Form items={items} setItems={setItems} />
      <div>{messageBox}</div>
      <List items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
