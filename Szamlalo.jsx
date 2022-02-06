import React, { useState } from "react";

function Szamlalo() {
  const [count, setCount] = useState(0);
  function novel() {
    setCount(count + 1);
  }
  function csokkent() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1 style={count > 10 ? { color: "red" } : { color: "white" }}>
        {count}
      </h1>
      <button onClick={csokkent}>-</button>
      <button onClick={novel}>+</button>
    </div>
  );
}

export default Szamlalo;
