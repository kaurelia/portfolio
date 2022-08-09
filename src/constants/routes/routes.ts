import { FC, lazy, LazyExoticComponent } from "react";
import Paths from "../paths/paths";
const Home = lazy(() => {
  return import(`../../pages/home/home`);
});
export type Route = {
  path: Paths;
  component: LazyExoticComponent<FC>;
};
const routes: Route[] = [{ path: Paths.Home, component: Home }];
export default routes;
