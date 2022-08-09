import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes, { Route as RouteType } from "../../constants/routes/routes";

const AppWrapper: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<>LOADING...</>}>
      <Routes>
        {routes.map(
          ({ path, component: Component }: RouteType): JSX.Element => {
            return <Route path={path} element={<Component />} />;
          }
        )}
      </Routes>
    </Suspense>
  );
};

export default AppWrapper;
