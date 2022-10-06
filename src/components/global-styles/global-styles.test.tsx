import { render } from "@testing-library/react";
import AppProvider from "../app-provider/app-provider";
import GlobalStyles from "./global-styles";

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
