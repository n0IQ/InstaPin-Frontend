import { create } from "zustand";

export const useLoginStore = create((set) => ({
  loggedIn: false,
  setLoggedIn: (state) => set({ loggedIn: state }),
}));
