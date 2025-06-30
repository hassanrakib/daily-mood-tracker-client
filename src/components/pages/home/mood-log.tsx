import { Moods, type MoodLog as IMoodLog } from "@/types/mood-log";
import { Icon, Text, Timeline } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { format } from "date-fns";
import {
  MdSentimentDissatisfied,
  MdSentimentSatisfied,
  MdSentimentVeryDissatisfied,
  MdSentimentVerySatisfied,
} from "react-icons/md";

export default function MoodLog({ moodLog }: { moodLog: IMoodLog }) {
  // decide mood icon based on the mood
  let moodIcon: ReactNode | null;

  switch (moodLog.mood) {
    case Moods.Happy:
      moodIcon = <MdSentimentSatisfied />;
      break;
    case Moods.Sad:
      moodIcon = <MdSentimentDissatisfied />;
      break;
    case Moods.Angry:
      moodIcon = <MdSentimentVeryDissatisfied />;
      break;
    case Moods.Excited:
      moodIcon = <MdSentimentVerySatisfied />;
      break;
    default:
      moodIcon = null;
  }

  return (
    <Timeline.Item>
      <Timeline.Connector>
        <Timeline.Separator />
        <Timeline.Indicator>
          <Icon fontSize="3xl" color="yellow.500">
            {moodIcon}
          </Icon>
        </Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content>
        <Timeline.Title>{moodLog.mood}</Timeline.Title>
        <Timeline.Description>
          {format(moodLog.date, "do MMMM yyyy")}
        </Timeline.Description>
        <Text textStyle="sm">{moodLog.note}</Text>
      </Timeline.Content>
    </Timeline.Item>
  );
}
