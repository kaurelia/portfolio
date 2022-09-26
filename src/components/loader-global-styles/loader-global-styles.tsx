import { css, Global } from "@emotion/react";

const LoaderGlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          overflow-y: hidden;
        }
      `}
    />
  );
};
export default LoaderGlobalStyles;
