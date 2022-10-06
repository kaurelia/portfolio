import { render } from "@testing-library/react";
import AppProvider from "../app-provider/app-provider";
import AppWrapper from "./app-wrapper";

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
