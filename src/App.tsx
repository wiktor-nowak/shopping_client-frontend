import { useState, useEffect, ReactNode } from "react";
import "./App.css";
import List, { type Item } from "./components/List";
import Form from "./components/Form";

const USERS_URL = "http://localhost:5052/users";

function App() {
  const [items, setItems] = useState<Item[]>([]);
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
