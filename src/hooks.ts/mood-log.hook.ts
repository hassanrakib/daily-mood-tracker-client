import { getMoodLogs } from "@/services/mood-log.service";
import { useQuery } from "@tanstack/react-query";

export const useGetMoodLogs = () => {
  return useQuery({
    queryKey: ["moodLogs"],
    queryFn: getMoodLogs,
  });
};
