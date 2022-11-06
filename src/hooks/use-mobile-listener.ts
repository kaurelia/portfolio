import { useEffect } from "react";
import { fromEvent, debounceTime } from "rxjs";
import useIsMobile from "../stores/is-mobile/is-mobile";

const useMobileListener = () => {
  const { setIsMobile } = useIsMobile(({ setIsMobile }) => {
    return { setIsMobile };
  });
  useEffect(() => {
    const resizeListener = fromEvent(window, "resize")
      .pipe(debounceTime(50))
      .subscribe(() => {
        setIsMobile(window.innerWidth <= 768);
      });
    return () => {
      resizeListener.unsubscribe();
    };
  }, []);
};
export default useMobileListener;
