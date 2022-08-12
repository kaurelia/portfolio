import App from "./app";
import { render, waitFor } from "@testing-library/react";

describe("Test app component", () => {
  it("Check if component renders properly", async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
