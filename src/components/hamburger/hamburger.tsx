import { mdiMenu } from "@mdi/js";
import { useState } from "react";
import { HamburgerMenu, HamburgerCorner, Spacer } from "./hamburger.styles";

const variants = {
  open: {
    width: "100vw",
    height: "100vh",
    borderBottomRightRadius: [60, 100, 500, 1000],
  },
  closed: {
    width: 60,
    height: 60,
    borderBottomRightRadius: [1000, 500, 100, 60],
  },
};

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Spacer />
      <HamburgerCorner
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 1.25,
        }}
        variants={variants}
      >
        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <HamburgerMenu path={mdiMenu} size={1.75} />
        </span>
      </HamburgerCorner>
    </>
  );
};
export default Hamburger;
