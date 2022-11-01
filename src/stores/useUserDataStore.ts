import create from "zustand";

interface IUserDataStore {
  isLogin: boolean;
  user: string;
  loginUser: (user: string) => void;
  logoutUser: () => void;
}

export const useUserDataStore = create<IUserDataStore>((set) => ({
  isLogin: false,
  user: "",
  logoutUser: () => {
    set({ isLogin: false });
  },
  loginUser: (user) => {
    set({ user, isLogin: true });
  },
}));
