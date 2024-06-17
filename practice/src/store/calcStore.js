import {create} from 'zustand'

const calcStore = create((set,get)=>({
	divideTen:(val)=>{ return val/10}
}))

export default calcStore;