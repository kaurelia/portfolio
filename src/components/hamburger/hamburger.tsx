import { mdiMenu } from "@mdi/js";
import { useState } from "react";
import { HamburgerMenu, HamburgerCorner } from "./hamburger.styles";

const variants = {
  open: {
    width: "100vw",
    height: "100vh",
    borderBottomRightRadius: 0,
  },
  closed: {
    width: 60,
    height: 60,
    borderBottomRightRadius: 60,
  },
};

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HamburgerCorner
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 1 }}
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
  );
};
export default Hamburger;
