import App from "./app";
import {
  findByTestId,
  getByTestId,
  render,
  waitFor,
  screen,
} from "@testing-library/react";

describe("Test app component", () => {
  it("Check if loader component renders properly", async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("Check if page component renders properly", async () => {
    const { container } = render(<App />);
    await waitFor(async () => {
      expect(await screen.findByTestId("page-home")).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });
});
