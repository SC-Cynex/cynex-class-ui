import React from "react";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import { Route, Routes } from "react-router-dom";

interface RouteType {
  path: string;
  component: React.FC;
}

const routes: RouteType[] = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
];

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Route
          key={key}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default AuthRoutes