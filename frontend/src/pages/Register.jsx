import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerUser(
        formData
      );

      toast.success(
        "Registration successful! Please login."
      );

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-[80vh]">

        <form
          onSubmit={
            handleSubmit
          }
          className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md"
        >

          <h2 className="text-3xl font-bold text-center mb-6">
            Register
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            className="w-full border p-3 rounded mb-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded transition-colors"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </MainLayout>
  );
};

export default Register;
