import React, { useState } from "react";
import { additional } from "./additional.js";
import calcStore from "./store/calcStore.js";
import changeStore from "./store/changeStore.js";

export default function App() {
  const [count, setCount] = useState(1);
  const { divideTen } = calcStore();
  const { visible, changeVisibleState } = changeStore();

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const multiply = () => {
    setCount(count * 5);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDivideTen = () => {
    const result = divideTen(count);
    setCount(result);
  };
  return (
    <div>
      숫자를 변하게 해봅시다!
      <div>{count}</div>
      <button onClick={handleIncrease}>증가</button>
      <button onClick={decreaseCount}>감소</button>
      <button onClick={multiply}>곱하기 5</button>
      <button onClick={handleDivideTen}>나누기 10</button>
      <h3>{visible ? "안녕하세요" : "반갑습니다."}</h3>
      <button onClick={changeVisibleState}>greeting</button>
    </div>
  );
}
