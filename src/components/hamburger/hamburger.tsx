import { mdiMenu } from "@mdi/js";
import { HamburgerMenu, HamburgerCorner } from "./hamburger.styles";

const Hamburger = () => {
  return (
    <HamburgerCorner>
      <HamburgerMenu path={mdiMenu} size={1.75} />
    </HamburgerCorner>
  );
};
export default Hamburger;
