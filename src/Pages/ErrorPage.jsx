import React from "react";
import { NavLink,useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>"This page took a wrong turn. Let’s get you back on track."</h1>
    {error && <p>{error.data}</p>}
    <NavLink to={"/"}>Go Home</NavLink>
    </div>
  );
};

export default ErrorPage;
