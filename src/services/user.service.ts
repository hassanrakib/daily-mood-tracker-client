import { AxiosInstance } from "../lib/AxiosInstance";
import type Response from "../types/response.type";
import { type User } from "../types/user.type";

export const getCurrentUser = async () => {
  try {
    const { data } = await AxiosInstance.get<Response<User>>("/users/me");

    // if success response
    if (data.data) {
      return data.data;
      // if error response
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
