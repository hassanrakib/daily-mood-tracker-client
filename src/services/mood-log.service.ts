import { AxiosInstance } from "@/lib/AxiosInstance";
import type { MoodLog } from "@/types/mood-log";
import type Response from "@/types/response.type";
import axios from "axios";

export const getMoodLogs = async () => {
  try {
    const { data } = await AxiosInstance.get<Response<MoodLog[]>>("/mood-logs");

    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response?.data.message);
    } else {
      throw new Error("Error processing your request");
    }
  }
};
