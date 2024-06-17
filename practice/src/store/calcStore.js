import { create } from 'zustand'

const calcStore = create((set, get) => ({
	increase: () => set((state) => ({ count: state.count + 1 })),
	divideTen: (val) => { return val / 10 },
	reset: () => set((state) => ({ count: state * 0 }))
}))



export default calcStore;