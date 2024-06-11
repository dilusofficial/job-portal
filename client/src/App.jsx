import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomeLayout from "./pages/home/HomeLayout";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/HomePage";
import About from "./pages/home/AboutPage";
import ContactPage from "./pages/home/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import AdminLayout from "./pages/admin/AdminLayout";
import Statistics from "./pages/admin/statistics/Statistics";
import Companies from "./pages/admin/company/Companies";
import Jobs from "./pages/admin/jobs/Jobs";
import Users from "./pages/admin/users/Users";
import Reports from "./pages/admin/reports/Reports";
import Settings from "./pages/admin/settings/Settings";
import SingleCompanyPage from "./pages/admin/company/SingleCompanyPage";
import SingleJobPage from "./pages/admin/jobs/SingleJobPage";
import SingleUserPage from "./pages/admin/users/SingleUserPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "forgot-password",
          element: <ForgotPasswordPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "companies",
          element: <Companies />,
        },
        {
          path: "companies/:id",
          element: <SingleCompanyPage />,
        },
        {
          path: "jobs",
          element: <Jobs />,
        },
        {
          path: "jobs/:id",
          element: <SingleJobPage />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "users/:id",
          element: <SingleUserPage />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
