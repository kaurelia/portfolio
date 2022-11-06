import { Global } from "@emotion/react";
import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes, {
  Route as RouteType,
} from "~frontend/src/constants/routes/routes";
import GlobalStyles from "~frontend/src/components/global-styles/global-styles";
import LoaderGlobalStyles from "~frontend/src/components/loader-global-styles/loader-global-styles";
import Loader from "~frontend/src/components/loader/loader";
import Hamburger from "../hamburger/hamburger";
import useIsMobile from "~frontend/src/stores/is-mobile/is-mobile";

const AppWrapper: FC = (): JSX.Element => {
  const { isMobile } = useIsMobile(({ isMobile }) => {
    return { isMobile };
  });
  return (
    <>
      <GlobalStyles />
      <Suspense
        fallback={
          <>
            <LoaderGlobalStyles />
            <Loader />
          </>
        }
      >
        {isMobile && <Hamburger />}
        <Routes>
          {routes.map(
            (
              { path, component: Component }: RouteType,
              index: number
            ): JSX.Element => {
              return (
                <Route
                  path={path}
                  key={`route-${index}`}
                  element={<Component />}
                />
              );
            }
          )}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppWrapper;
