import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingScreen from "../pages/auth/LandingScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import FirstLayout from "../components/common/FirstLayout";
import HomeScreen from "../pages/screen/HomeScreen";
import ProfileScreen from "../pages/screen/ProfileScreen";
import SettingScreen from "../pages/screen/SettingScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },

  {
    path: "/signin",
    element: <SigninScreen />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
      {
        path: "/settings",
        element: <SettingScreen />,
      },
    ],
  },
]);
