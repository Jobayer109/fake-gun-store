import { useState } from "react";
import "./App.css";
import Guns from "./Components/Guns/Guns";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0)
  const addToCart = () => {
    setCount(count+1)
  }
  return (
    <div className="App">

      <Navbar count={count}></Navbar>
      <Guns addToCart={addToCart}></Guns>
    </div>
  );
}

export default App;
