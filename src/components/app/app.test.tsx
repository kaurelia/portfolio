import App from "~frontend/src/components/app/app";
import {
  findByTestId,
  getByTestId,
  render,
  waitFor,
  screen,
  act,
} from "@testing-library/react";

describe("Test app component", () => {
  it("Check if loader component renders properly", async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("Check if page component renders properly", async () => {
    const { container } = render(<App />);
    await act(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
