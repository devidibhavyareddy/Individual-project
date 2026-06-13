import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";

import {
  getFavorites,
  removeFavorite,
} from "../services/favoriteService";

import AnimalCard from "../components/AnimalCard";

import Loader from "../components/Loader";

const Favorites = () => {
  const [favorites,
    setFavorites] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites =
    async () => {
      try {
        const data =
          await getFavorites();

        setFavorites(data);
      } catch (error) {
        toast.error(
          "Failed to load favorites"
        );
      } finally {
        setLoading(false);
      }
    };

  const handleRemove =
    async (animalId) => {
      try {
        await removeFavorite(
          animalId
        );

        setFavorites((prev) =>
          prev.filter(
            (animal) =>
              animal._id !== animalId
          )
        );

        toast.success(
          "Removed from favorites"
        );
      } catch (error) {
        toast.error(
          "Failed to remove favorite"
        );
      }
    };

  return (
    <MainLayout>

      <div className="max-w-7xl mx-auto p-5">

        <h1 className="text-4xl font-bold mb-6">
          My Favorites ❤️
        </h1>

        {loading ? (
          <Loader />
        ) : favorites.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow">
            <p className="text-gray-600 text-lg mb-4">
              You haven't saved any favorites yet.
            </p>
            <Link
              to="/animals"
              className="text-orange-500 hover:underline font-semibold"
            >
              Browse animals →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {favorites.map(
              (animal) => (
                <div key={animal._id} className="relative">
                  <AnimalCard
                    animal={animal}
                  />
                  <button
                    onClick={() =>
                      handleRemove(
                        animal._id
                      )
                    }
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500 px-3 py-1 rounded text-sm shadow"
                  >
                    Remove
                  </button>
                </div>
              )
            )}
          </div>
        )}

      </div>

    </MainLayout>
  );
};

export default Favorites;
