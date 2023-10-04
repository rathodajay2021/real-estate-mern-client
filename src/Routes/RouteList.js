import { About } from "../Components/Pages/About";
import { Home } from "../Components/Pages/Home";
import { Profile } from "../Components/Pages/Profile";
import { URL_ABOUT, URL_HOME_PAGE, URL_PROFILE } from "../Utils/Path";

const RoutesList = [
  {
    path: URL_HOME_PAGE,
    exact: true,
    Component: Home,
    hasChildren: false,
  },
  {
    path: URL_ABOUT,
    exact: true,
    Component: About,
    hasChildren: false,
  },
  {
    path: URL_PROFILE,
    exact: true,
    Component: Profile,
    hasChildren: false,
  },
];

export default RoutesList;
