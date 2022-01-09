import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { isUserAuthenticated, getLoggedInUser } from "./helpers/authUtils";

const Login = React.lazy(() => import("./components/Login/Login"));


const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isAuthTokenValid = isUserAuthenticated();
      if (!isAuthTokenValid) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }

      const loggedInUser = getLoggedInUser();
      // check if route is restricted by role
      if (roles && !roles.includes(loggedInUser.role)) {
          // role not authorised so redirect to home page
          return <Redirect to={{ pathname: "/" }} />;
      }
      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

const routes = [
  { path: "/login", name: "Login", component: Login, route: Route, exac: true },
  // { path: "/logout", name: "Logout", component: Logout, route: Route },
]

export { routes, PrivateRoute };