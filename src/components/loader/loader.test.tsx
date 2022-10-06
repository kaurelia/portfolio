import { render } from "@testing-library/react";
import AppProvider from "../app-provider/app-provider";
import Loader from "./loader";

describe("Test loader component", () => {
  it("Check if loader renders properly", async () => {
    const { container } = render(
      <AppProvider>
        <Loader />
      </AppProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
