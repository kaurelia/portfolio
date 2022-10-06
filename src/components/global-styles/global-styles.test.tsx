import { render } from "@testing-library/react";
import AppProvider from "~frontend/src/components/app-provider/app-provider";
import GlobalStyles from "~frontend/src/components/global-styles/global-styles";

describe("Test global-styles component", () => {
  it("Check if global-styles renders properly", async () => {
    const { container } = render(
      <AppProvider>
        <GlobalStyles />
      </AppProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
