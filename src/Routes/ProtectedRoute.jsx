//CORE
import { Fragment } from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

//CUSTOM
import { URL_SIGN_IN } from "../Utils/Path";
import PropTypes from "prop-types";

const ProtectedRoute = (props) => {
  const isLoggedIn = true;
  // const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);

  return (
    <div style={{ height: "inherit" }}>
      {!isLoggedIn ? (
        <Navigate replace to={URL_SIGN_IN} />
      ) : (
        <Fragment>{props.children}</Fragment>
      )}
    </div>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
