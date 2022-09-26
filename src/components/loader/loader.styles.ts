import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
export const LoaderTextWrapper = styled(motion.div)<{
  top: number | null;
  left: number | null;
}>`
  position: absolute;
  font-size: 1.5rem;
  user-select: none;
  pointer-events: none;
  ${({ top, left }) => {
    return css`
      top: ${top !== null ? `${top}px` : "inherit"};
      left: ${left !== null ? `${left}px` : "inherit"};
    `;
  }}
`;

export const LoaderText = styled.span<{ rotateDeg: number }>`
  transform: rotate(
    ${({ rotateDeg }) => {
      return rotateDeg;
    }}deg
  );
  display: inline-block;
  position: absolute;
  transform-origin: 0 100px;
  top: -100px;
`;
