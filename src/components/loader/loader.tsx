import { useEffect, useState } from "react";
import { fromEvent } from "rxjs";
import {
  LoaderText,
  LoaderWrapper,
  LoaderTextWrapper,
} from "~frontend/src/components/loader/loader.styles";

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
  const moveLoader = (event: keyof DocumentEventMap) => {
    return fromEvent(document, event).subscribe((event: Event) => {
      if (event instanceof MouseEvent || event instanceof TouchEvent) {
        const { pageX, pageY } =
          event instanceof MouseEvent ? event : event.touches[0];
        setPageCords({ top: pageY, left: pageX });
      }
    });
  };
  useEffect(() => {
    const mouseEventListener = moveLoader("mousemove");
    const touchEventListener = moveLoader("touchmove");
    const gestureEventListener = fromEvent(document, "gesturestart").subscribe(
      (event: Event) => {
        event.preventDefault();
      }
    );

    return () => {
      mouseEventListener.unsubscribe();
      touchEventListener.unsubscribe();
      gestureEventListener.unsubscribe();
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
