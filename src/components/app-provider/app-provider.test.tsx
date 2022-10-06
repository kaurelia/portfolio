import { render } from "@testing-library/react";
import AppProvider from "~frontend/src/components/app-provider/app-provider";

describe("Test app-provider component", () => {
  it("Check if app-provider renders properly", async () => {
    const { container } = render(<AppProvider />);
    expect(container).toMatchSnapshot();
  });
});
