import { create } from "zustand";

const calcStore = create((set, get) => ({
    myScore:0,
    divideTen: (val) => {
        set({myScore: val/10});
        return val / 10  
    },
    multiFive: (val) => {  // multiFive 님 제 스토어에 들어올 때는 저의 허락을 받고 입점하셔야죠..ㅎㅎ
        set({myScore: val*5})
        return val * 5;
    },
}));

export default calcStore;
