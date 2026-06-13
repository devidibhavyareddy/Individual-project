import axiosInstance from "../utils/axiosInstance";

export const getAnimals = async () => {
  const response =
    await axiosInstance.get(
      "/animals"
    );

  return response.data;
};

export const getAnimalById =
  async (id) => {
    const response =
      await axiosInstance.get(
        `/animals/${id}`
      );

    return response.data;
  };

export const createAnimal = async (
  animalData
) => {
  const response =
    await axiosInstance.post(
      "/animals",
      animalData
    );

  return response.data;
};

export const updateAnimal = async (
  id,
  animalData
) => {
  const response =
    await axiosInstance.put(
      `/animals/${id}`,
      animalData
    );

  return response.data;
};

export const deleteAnimal = async (
  id
) => {
  const response =
    await axiosInstance.delete(
      `/animals/${id}`
    );

  return response.data;
};
