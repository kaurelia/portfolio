import { useEffect, useState } from "react";
import { fromEvent } from "rxjs";
import { LoaderWrapper, LoaderTextWrapper, LoaderText } from "./loader.styles";

const Loader = () => {
  const [pageCords, setPageCords] = useState<{
    top: number | null;
    left: number | null;
  }>({ top: null, left: null });
  const loaderText = "Aurelia✨Korbela✨";
  const splittedCharsIntoSpan = loaderText.split("").map((char, index) => {
    return (
      <LoaderText key={`loader-text-${index}`} rotateDeg={index * 22.5}>
        {char}
      </LoaderText>
    );
  });
  useEffect(() => {
    const mouseEventListener = fromEvent(document, "mousemove").subscribe(
      (event: Event) => {
        if (event instanceof MouseEvent) {
          const { pageX, pageY } = event;
          setPageCords({ top: pageY, left: pageX });
        }
      }
    );
    return () => {
      mouseEventListener.unsubscribe();
    };
  }, []);
  return (
    <LoaderWrapper>
      <LoaderTextWrapper
        top={pageCords.top}
        left={pageCords.left}
        animate={{ transform: "rotate(360deg)" }}
        initial={{ transform: "rotate(0deg)" }}
        transition={{ ease: "linear", duration: 14, repeat: Infinity }}
      >
        {splittedCharsIntoSpan}
      </LoaderTextWrapper>
    </LoaderWrapper>
  );
};
export default Loader;
