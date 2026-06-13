import axiosInstance from "../utils/axiosInstance";

export const createRequest =
  async (requestData) => {
    const response =
      await axiosInstance.post(
        "/adoptions",
        requestData
      );

    return response.data;
  };

export const getMyRequests =
  async () => {
    const response =
      await axiosInstance.get(
        "/adoptions/my"
      );

    return response.data;
  };

export const getAllRequests =
  async () => {
    const response =
      await axiosInstance.get(
        "/adoptions"
      );

    return response.data;
  };

export const updateRequestStatus =
  async (id, status) => {
    const response =
      await axiosInstance.put(
        `/adoptions/${id}`,
        { status }
      );

    return response.data;
  };
