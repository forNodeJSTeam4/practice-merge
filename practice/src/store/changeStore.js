import { create } from "zustand";

const useStore = create((set) => ({
  visible: true,
  changeVisibleState: () => set((state) => ({ visible: !state.visible })),
}));

export default useStore;
