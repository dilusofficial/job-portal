import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomeLayout from "./pages/user/HomeLayout";
import ErrorPage from "./pages/error/ErrorPage";
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
import PaymentSettings from "./pages/admin/settings/PaymentSettings";
import NotificationSettings from "./pages/admin/settings/NotificationSettings";
import AdvertisementSettings from "./pages/admin/settings/AdvertisementSettings";
import PlanSettings from "./pages/admin/settings/PlanSettings";
import SingleNotification from "./pages/admin/settings/SingleNotification";
import DataCollection from "./pages/dataCollection/DataCollection";
import HomePage from "./pages/user/home/HomePage";
import JobPage from "./pages/user/jobs/JobPage";
import CompaniesPage from "./pages/user/companies/CompaniesPage";
import MobileOtp from "./pages/auth/MobileOtp";
import MobileVerify from "./pages/auth/MobileVerify";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "jobs",
          element: <JobPage />,
        },
        {
          path: "companies",
          element: <CompaniesPage />,
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
          path: "send-otp",
          element: <MobileOtp />,
        },
        {
          path: "verify",
          element: <MobileVerify />,
        },
        {
          path: "register/details",
          element: <DataCollection />,
        },
        {
          path: "forgot-password",
          element: <ForgotPasswordPage />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
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

        {
          path: "settings/payment",
          element: <PaymentSettings />,
        },
        {
          path: "settings/notification",
          element: <NotificationSettings />,
        },
        {
          path: "settings/notification/:id",
          element: <SingleNotification />,
        },
        {
          path: "settings/advertisement",
          element: <AdvertisementSettings />,
        },
        {
          path: "settings/plan",
          element: <PlanSettings />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
