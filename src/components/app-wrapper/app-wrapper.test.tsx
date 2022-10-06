import { render } from "@testing-library/react";
import AppProvider from "~frontend/src/components/app-provider/app-provider";
import AppWrapper from "~frontend/src/components/app-wrapper/app-wrapper";

describe("Test app-wrapper component", () => {
  it("Check if app-wrapper renders properly", async () => {
    const { container } = render(
      <AppProvider>
        <AppWrapper />
      </AppProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
