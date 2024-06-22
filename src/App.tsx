import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { ITEMS_URL } from "./utilities/api";

export interface Item extends Object {
  item_id: string;
  name: string;
  category: string;
  quantity: number;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  console.log(items);

  const fetchItems = async () => {
    await fetch(ITEMS_URL)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
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
      <List items={items} />
    </div>
  );
}

export default App;
