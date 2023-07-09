import { GifRoutes } from "../Gifs/routes/GifRoutes";
import { Login } from "../auth/pages/Login";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <GifRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
