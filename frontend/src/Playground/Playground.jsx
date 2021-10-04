import { useState } from "react";

const Playground = () => {
  const [cart, setCart] = useState(0);
  const [productId, setProductId] = useState([]);
  const addItem = (e) => {
    const id = e.target.value;
    if (id == 1) {
      setCart(cart + 1);
      productId.push(setProductId([...productId, id]));
    }
    if (id == 2) {
      setCart(cart + 1);
      setProductId([id]);
    }
  };
  return (
    <div>
      <h1>Playground</h1>
      <button onClick={addItem} value={1}>
        one
      </button>
      <button onClick={addItem} value={2}>
        two
      </button>
      <h1>{cart}</h1>
      <h1>{productId}</h1>
    </div>
  );
};

export default Playground;
