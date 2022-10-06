import { render } from "@testing-library/react";
import AppProvider from "~frontend/src/components/app-provider/app-provider";
import Loader from "~frontend/src/components/loader/loader";

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
