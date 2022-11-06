import create from "zustand";

type IsMobileState = {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
};

const useIsMobile = create<IsMobileState>((set) => {
  return {
    isMobile: window.innerWidth <= 768,
    setIsMobile: (isMobile: boolean) => {
      set(() => {
        return { isMobile };
      });
    },
  };
});

export default useIsMobile;
