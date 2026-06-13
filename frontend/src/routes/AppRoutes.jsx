import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Animals from "../pages/Animals";
import AnimalDetails from "../pages/AnimalDetails";

import Favorites from "../pages/Favorites";
import MyRequests from "../pages/MyRequests";
import ProtectedRoute, {
  AdminRoute,
} from "../components/ProtectedRoute";

import Dashboard from "../pages/admin/Dashboard";
import AddAnimal from "../pages/admin/AddAnimal";
import ManageAnimals from "../pages/admin/ManageAnimals";
import ManageRequests from "../pages/admin/ManageRequests";
import EditAnimal from "../pages/admin/EditAnimal";

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/animals"
        element={<Animals />}
      />

      <Route
        path="/animals/:id"
        element={<AnimalDetails />}
      />

      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-requests"
        element={
          <ProtectedRoute>
            <MyRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/add-animal"
        element={
          <AdminRoute>
            <AddAnimal />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/animals"
        element={
          <AdminRoute>
            <ManageAnimals />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/animals/edit/:id"
        element={
          <AdminRoute>
            <EditAnimal />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/requests"
        element={
          <AdminRoute>
            <ManageRequests />
          </AdminRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;
