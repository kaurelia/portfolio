import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes, { Route as RouteType } from "../../constants/routes/routes";

const AppWrapper: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<>LOADING...</>}>
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
  );
};

export default AppWrapper;
