import { createBrowserRouter, Navigate } from "react-router";
import Tour from "../pages/mainPage/Tour";
import { TourCreateView } from "../pages/TourCreate/TourCreateView";
import { DetailPage } from "../pages/mainPage/DetailPage";

const router = createBrowserRouter([
  {
    path: "*",
    Component: Tour,
  },
  { path: "/", element: <Navigate to={"/tour"} /> },
  {
    path: "tour",
    Component: Tour,
  },
  { path: "tour/add-edit-form", Component: TourCreateView },
  { path: "tour/detail", Component: DetailPage },
]);
export default router;
