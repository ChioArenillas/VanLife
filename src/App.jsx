import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/vans/VanDetail";
import "./server";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVansDetails, {
  loader as hostVansDetailsLoader,
} from "./pages/Host/HostVansDetails";
import HostVanPrice from "./pages/Host/HostVanPrice";
import HostVanPhoto from "./pages/Host/HostVanPhoto";
import HostVanInfo from "./pages/Host/HostVanInfo";
import NotFound from "./pages/vans/NotFound";
import Login from "./pages/vans/Login";
import Error from "./components/Error";
import { requireAuth } from "./utils";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
<Route element={<Layout />} errorElement={<Error />}>
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About />} />

  <Route path="vans" element={<Vans />} loader={vansLoader} />
  <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

  <Route path="login" element={<Login />} />

  {/* PROTECTED ROUTES */}
  <Route
    path="host"
    element={
      <ProtectedRoute>
        <HostLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<Dashboard />} />

    <Route path="income" element={<Income />} />

    <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

    <Route
      path="vans/:id"
      element={<HostVansDetails />}
      loader={hostVansDetailsLoader}
    >
      <Route index element={<HostVanInfo />} />
      <Route path="pricing" element={<HostVanPrice />} />
      <Route path="photos" element={<HostVanPhoto />} />
    </Route>

    <Route path="reviews" element={<Reviews />} />
  </Route>

  <Route path="*" element={<NotFound />} />
</Route>
    ),
  );

  return <RouterProvider router={router} />;
}
