import { useGetMoodLogs } from "@/hooks.ts/mood-log.hook";
import { Timeline } from "@chakra-ui/react";
import MoodLog from "./mood-log";

export default function MoodLogsTimeline() {
  const { data } = useGetMoodLogs();

  return (
    <Timeline.Root size="xl" variant="plain">
      {data?.map((moodLog) => (
        <MoodLog key={moodLog._id} moodLog={moodLog} />
      ))}
    </Timeline.Root>
  );
}
