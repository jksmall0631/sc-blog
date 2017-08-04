import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../Auth/Auth";

const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      Auth.isAuth
        ? <Component
            {...props}
            entries={rest.entries}
            addEntry={rest.addEntry}
            removeEntry={rest.removeEntry}
            photos={rest.photos}
            savePhoto={rest.savePhoto}
            removePhoto={rest.removePhoto}
          />
        : <Redirect
            to={{
              pathname: "/admin",
              state: { from: props.location }
            }}
          />}
  />;

export default PrivateRoute;
