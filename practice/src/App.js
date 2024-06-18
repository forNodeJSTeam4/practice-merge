import React, { useState } from "react";
import { additional } from "./additional.js";
import calcStore from "./store/calcStore.js";
import changeStore from "./store/changeStore.js";
import "bootstrap/dist/css/bootstrap.min.css"
import {Button} from 'react-bootstrap'
import Remote1 from "./component/Remote1.js";
import Remote2 from "./component/Remote2.js";

export default function App() {
    const [count, setCount] = useState(1);
    const { divideTen, multiFive, myScore } = calcStore();
    const { visible, changeVisibleState } = changeStore();

    const decreaseCount = () => {
        setCount(count - 1);
    };

    const multiply = () => {
        const result = multiFive(count);
        setCount(result);
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
            <div style={{margin:'10px', padding:'10px', border: '1px solid gray'}}>
                <div>{count}</div>
                <div>곱셈 나눗셈에만 반응하는 my-score : {myScore}</div>
                <button onClick={handleIncrease}>증가</button>
                <button onClick={decreaseCount}>감소</button>
                <button onClick={multiply}>곱하기 5</button>
                <Button onClick={handleDivideTen}>나누기 10</Button>
                <h3>{visible ? "안녕하세요" : "반갑습니다."}</h3>
                <button onClick={changeVisibleState}>greeting</button>
            </div>
            <Remote1 count={count} />
            <Remote2 count={count}/>
        </div>
    );
}
