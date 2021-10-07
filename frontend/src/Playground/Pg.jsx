import { useState } from "react";

const Pg = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleSubmit = () => {};
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>+</button>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setVal(e.target.value)} />
        <button>ADD</button>
        <p>{val}</p>
      </form>
    </div>
  );
};

export default Pg;
