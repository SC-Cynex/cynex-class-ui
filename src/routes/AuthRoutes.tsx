import React from "react";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import { Route, Routes } from "react-router-dom";
import PortalPage from "../pages/Portal/PortalPage";
import TimeTablePage from "../pages/TimeTable/TimeTablePage";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import ClassPage from "../pages/Class/ClassPage";
import SettingPage from "../pages/Setting/SettingPage";
import ResetPasswordPage from "../pages/Auth/ResetPassword/ResetPasswordPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import Home from "../pages/Home/Home";
import RegisterClassPage from "../pages/Register/RegisterClassPage";
import ProtectedRoute from "./ProtectedRoute";

interface RouteType {
  path: string;
  component: React.FC;
  isProtected?: boolean;
  allowedRoles?: number[];
}

const routes: RouteType[] = [
  { path: "/", component: Home },
  { path: "/login", component: LoginPage },
  { path: "/register/user", component: RegisterPage, allowedRoles: [3] },
  { path: "/register/class", component: RegisterClassPage, allowedRoles: [3] },
  { path: "/reset-password", component: ResetPasswordPage },

  { path: "/portal", component: PortalPage, isProtected: true, allowedRoles: [1, 2, 3] },
  { path: "/timetable", component: TimeTablePage, isProtected: true, allowedRoles: [2, 3] },
  { path: "/registration", component: RegistrationPage, isProtected: true, allowedRoles: [2, 3] },
  { path: "/class", component: ClassPage, isProtected: true, allowedRoles: [1, 3] },
  { path: "/setting", component: SettingPage, isProtected: true, allowedRoles: [1, 2, 3] }
];

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Route
          key={key}
          path={route.path}
          element={
            route.isProtected ? (
              <ProtectedRoute
                component={route.component}
                allowedRoles={route.allowedRoles || []}
              />
            ) : (
              <route.component />
            )
          }
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AuthRoutes;
