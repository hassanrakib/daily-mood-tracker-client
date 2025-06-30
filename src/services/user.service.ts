import { AxiosInstance } from "../lib/AxiosInstance";
import type Response from "../types/response.type";
import {
  type LoginCredentials,
  type SessionPayload,
  type UserRegistrationData,
} from "../types/user.type";
import axios from "axios";

export const logIn = async (loginCredentials: LoginCredentials) => {
  try {
    const { data } = await AxiosInstance.post<Response<SessionPayload>>(
      "/users/login",
      loginCredentials
    );

    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response?.data.message);
    } else {
      throw new Error("Error processing your request");
    }
  }
};

export const registerUser = async (
  userRegistrationData: UserRegistrationData
) => {
  try {
    const { data } = await AxiosInstance.post<Response<SessionPayload>>(
      "/users/register",
      userRegistrationData
    );

    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response?.data.message);
    } else {
      throw new Error("Error processing your request");
    }
  }
};
