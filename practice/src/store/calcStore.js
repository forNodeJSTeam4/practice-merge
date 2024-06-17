import { create } from "zustand";

const calcStore = create((set, get) => ({
    divideTen: (val) => {
        return val / 10;
    },
    multiFive: (val) => {
        return val * 5;
    },
}));

export default calcStore;
