import { AxiosInstance } from "../lib/AxiosInstance";
import type Response from "../types/response.type";
import { type LoginCredentials, type SessionPayload, type UserRegistrationData} from "../types/user.type";

export const logIn = async (loginCredentials: LoginCredentials) => {
  try {
    const { data } = await AxiosInstance.post<
      Response<SessionPayload>
    >("/users/login", loginCredentials);

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

export const registerUser = async (userRegistrationData: UserRegistrationData) => {
  try {
    const { data } = await AxiosInstance.post<
      Response<SessionPayload>
    >("/users/register", userRegistrationData);

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
