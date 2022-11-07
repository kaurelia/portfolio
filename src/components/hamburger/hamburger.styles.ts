import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import Icon from "@mdi/react";
import { IconProps } from "@mdi/react/dist/IconProps";
import { motion } from "framer-motion";

export const HamburgerMenu = styled(Icon)`
  cursor: pointer;
  color: ${({
    theme: {
      colors: { hamburgerIcon },
    },
  }) => {
    return hamburgerIcon;
  }};
  padding: 5px;
`;
export const HamburgerCorner = styled(motion.div)`
  height: 60px;
  width: 60px;
  border-bottom-right-radius: 60px;
  background-color: ${({
    theme: {
      colors: { hamburgerCorner },
    },
  }) => {
    return hamburgerCorner;
  }};
  position: fixed;
  top: 0;
  z-index: 2;
`;
export const Spacer = styled.div`
  width: 100vw;
  height: 60px;
`;
