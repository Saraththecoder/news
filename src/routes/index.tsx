import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { PublicLayout } from "@/components/layouts/PublicLayout";
import { StudentLayout } from "@/components/layouts/StudentLayout";
import { AdminLayout } from "@/components/layouts/AdminLayout";

import Home from "@/pages/public/Home";
import PublicEventsPage from "@/pages/public/EventsPage";
import PublicMarketplacePage from "@/pages/public/MarketplacePage";
import PublicDonationsPage from "@/pages/public/DonationsPage";
import Login from "@/pages/auth/Login";
import StudentDashboard from "@/pages/student/Dashboard";
import AdminDashboard from "@/pages/admin/Dashboard";
import ComingSoon from "@/pages/shared/ComingSoon";
import CampaignsPage from "@/pages/student/CampaignsPage";
import TasksPage from "@/pages/student/TasksPage";
import QuizzesPage from "@/pages/student/QuizzesPage";
import CertificatesPage from "@/pages/student/CertificatesPage";
import MarketplacePage from "@/pages/student/MarketplacePage";
import DonationsPage from "@/pages/student/DonationsPage";
import IdCardPage from "@/pages/student/IdCardPage";
import SelfieFramePage from "@/pages/student/SelfieFramePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "events", element: <PublicEventsPage /> },
      { path: "marketplace", element: <PublicMarketplacePage /> },
      { path: "donations", element: <PublicDonationsPage /> },
      { path: "*", element: <ComingSoon /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Login />, // using same login component as placeholder
  },
  {
    path: "/student",
    element: <StudentLayout />,
    children: [
      { index: true, element: <Navigate to="/student/dashboard" replace /> },
      { path: "dashboard", element: <StudentDashboard /> },
      { path: "campaigns", element: <CampaignsPage /> },
      { path: "tasks", element: <TasksPage /> },
      { path: "quizzes", element: <QuizzesPage /> },
      { path: "certificates", element: <CertificatesPage /> },
      { path: "marketplace", element: <MarketplacePage /> },
      { path: "donations", element: <DonationsPage /> },
      { path: "id-card", element: <IdCardPage /> },
      { path: "selfie-frame", element: <SelfieFramePage /> },
      { path: "*", element: <ComingSoon /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "*", element: <ComingSoon /> },
    ],
  },
  {
    path: "*",
    element: <ComingSoon />
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
