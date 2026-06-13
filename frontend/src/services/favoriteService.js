import axiosInstance from "../utils/axiosInstance";

export const addFavorite = async (
  animalId
) => {
  const response =
    await axiosInstance.post(
      `/favorites/${animalId}`
    );

  return response.data;
};

export const getFavorites =
  async () => {
    const response =
      await axiosInstance.get(
        "/favorites"
      );

    return response.data;
  };

export const removeFavorite =
  async (animalId) => {
    const response =
      await axiosInstance.delete(
        `/favorites/${animalId}`
      );

    return response.data;
  };