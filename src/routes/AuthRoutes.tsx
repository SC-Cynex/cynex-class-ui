import React, { useEffect, useState } from "react";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import PortalPage from "../pages/Portal/PortalPage";
import TimeTablePage from "../pages/TimeTable/TimeTablePage";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import ClassPage from "../pages/Class/ClassPage";
import SettingPage from "../pages/Setting/SettingPage";
import ResetPasswordPage from "../pages/Auth/ResetPassword/ResetPasswordPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

interface RouteType {
  path: string;
  component: React.FC;
}

const routes: RouteType[] = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/reset-password", component: ResetPasswordPage },
  { path: "/portal", component: PortalPage },
  { path: "/timetable", component: TimeTablePage },
  { path: "/registration", component: RegistrationPage },
  { path: "/class", component: ClassPage },
  { path: "/setting", component: SettingPage }
];

const AuthRoutes: React.FC = () => {
  const RedirectToAppropriatePage: React.FC = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      if (isAuthenticated) {
        navigate('/portal');
      } else {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);

    return null;
  }

  return (
    <Routes>
      {routes.map((route, key) => (
        <Route
          key={key}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="/" element={<RedirectToAppropriatePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AuthRoutes