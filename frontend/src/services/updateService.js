import axiosInstance from "../utils/axiosInstance";

export const getAnimalUpdates = async (
  animalId
) => {
  const response =
    await axiosInstance.get(
      `/updates/${animalId}`
    );

  return response.data;
};

export const createUpdate =
  async (updateData) => {
    const response =
      await axiosInstance.post(
        "/updates",
        updateData
      );

    return response.data;
  };

export const deleteUpdate =
  async (updateId) => {
    const response =
      await axiosInstance.delete(
        `/updates/${updateId}`
      );

    return response.data;
  };