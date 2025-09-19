import { createBrowserRouter, Navigate } from "react-router";
import Tour from "../Tour";
import { TourCreateView } from "../TourCreate/TourCreateView";

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
]);
export default router;
