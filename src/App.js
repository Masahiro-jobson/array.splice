import "./styles.css";

export default function App() {
  const items = ["item1", "item2", "item3"];
  // items => ["item2", "item1", "item3"]
  const remove = items.splice(0, 1);
  console.log(items);
  console.log(remove);
  items.splice(1, 0, remove[0]);
  // splice(start, deleteCount, item1)
  return (
    <div className="App">
      <h1>splice</h1>
    </div>
  );
}
