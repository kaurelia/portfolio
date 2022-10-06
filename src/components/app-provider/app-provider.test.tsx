import { render } from "@testing-library/react";
import AppProvider from "./app-provider";

describe("Test app-provider component", () => {
  it("Check if app-provider renders properly", async () => {
    const { container } = render(<AppProvider />);
    expect(container).toMatchSnapshot();
  });
});
