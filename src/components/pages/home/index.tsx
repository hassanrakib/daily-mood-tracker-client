import { Stack } from "@chakra-ui/react";
import MoodLogsTimeline from "./mood-logs-timeline";

export default function Home() {
  return (
    <Stack px="1" gap="4">
      <MoodLogsTimeline />
    </Stack>
  );
}
