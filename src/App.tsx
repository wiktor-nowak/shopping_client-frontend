import { useState, useEffect, ReactNode } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

const USERS_URL = "http://localhost:5052/users";

export interface Item extends Object {
  id: number;
  name: string;
  cat: string;
  quant: number;
}

function App() {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Soap",
      cat: "Hygiene",
      quant: 2
    }
  ]);
  const renderItem = (item: Item): ReactNode => (
    <p>
      name: {item.name}, category: {item.cat}, quantity: {item.quant}
    </p>
  );
  useEffect(() => {
    fetch(USERS_URL)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setItems(res);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <List items={items} renderItem={renderItem} />
      <Form />
    </div>
  );
}

export default App;
