//CORE
import { Fragment, useEffect } from "react";
import { Routes, Route as ReactRoute, useNavigate } from "react-router-dom";
import { URL_HOME_PAGE, URL_SIGN_IN, URL_SIGN_UP } from "../Utils/Path";
import { SignIn } from "../Components/Pages/SignIn";
import { SignUp } from "../Components/Pages/SignUp";
import RoutesList from "./RouteList";
import ProtectedRoute from "./ProtectedRoute";

const BEFORE_LOGIN_ACCESSIBLE_PATHS = [URL_SIGN_UP, URL_SIGN_IN];

const Route = () => {
  const navigate = useNavigate();
  // const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
  const isLoggedIn = false;

  useEffect(() => {
    if (
      isLoggedIn &&
      BEFORE_LOGIN_ACCESSIBLE_PATHS.includes(window?.location?.pathname)
    ) {
      navigate({ pathname: URL_HOME_PAGE });
    }
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      <ReactRoute path={URL_SIGN_IN} element={<SignIn />} />
      <ReactRoute path={URL_SIGN_UP} element={<SignUp />} />
      {RoutesList.map((route, index) => (
        <Fragment key={index}>
          {route.hasChildren ? (
            <ReactRoute
              path={route.path}
              element={
                <ProtectedRoute>
                  <route.Component />
                </ProtectedRoute>
              }
            >
              {route.children}
            </ReactRoute>
          ) : (
            <ReactRoute
              path={route.path}
              element={
                <ProtectedRoute>
                  <route.Component />
                </ProtectedRoute>
              }
            />
          )}
        </Fragment>
      ))}
    </Routes>
  );
};

export default Route;
