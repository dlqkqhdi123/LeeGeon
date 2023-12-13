import items from "../mock.json";
import ReviewList from "./ReviewList";

function App() {
  const handleDelete = (id) => {
    alert(id);
  };
  return (
    <div>
      <ReviewList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;
