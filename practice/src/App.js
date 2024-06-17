import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    let num = count - 1;
    setCount(num);
  };

  return (
    <div>
      숫자를 변하게 해봅시다!
      <div>{count}</div>
      <button>증가</button>
      <button onClick={decreaseCount}>감소</button>
    </div>
  );
}
