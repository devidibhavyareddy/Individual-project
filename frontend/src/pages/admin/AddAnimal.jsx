import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import AdminLayout from "../../layouts/AdminLayout";
import { createAnimal } from "../../services/animalService";

const AddAnimal = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      type: "Dog",
      age: "",
      gender: "Male",
      description: "",
      story: "",
      image: "",
      status: "Rescued",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createAnimal({
        ...formData,
        age: Number(formData.age),
      });

      toast.success("Animal added successfully");
      navigate("/admin/animals");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to add animal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Add Animal
        </h1>
        <Link
          to="/admin/animals"
          className="text-orange-500 hover:underline"
        >
          ← Back to list
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-2xl"
      >

        <input
          type="text"
          name="name"
          placeholder="Animal Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            min="0"
            value={formData.age}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="Rescued">Rescued</option>
            <option value="Under Care">Under Care</option>
            <option value="Ready For Adoption">Ready For Adoption</option>
            <option value="Adopted">Adopted</option>
          </select>
        </div>

        <textarea
          name="description"
          placeholder="Description"
          required
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
          rows="3"
        />

        <textarea
          name="story"
          placeholder="Rescue story (optional)"
          value={formData.story}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
          rows="3"
        />

        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white px-5 py-2 rounded transition-colors"
        >
          {loading ? "Adding..." : "Add Animal"}
        </button>

      </form>

    </AdminLayout>
  );
};

export default AddAnimal;
