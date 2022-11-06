import styled from "@emotion/styled";
import Icon from "@mdi/react";

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
export const HamburgerCorner = styled.div`
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
`;
