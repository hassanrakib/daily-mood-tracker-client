export enum Moods {
  "Happy" = "Happy",
  "Sad" = "Sad",
  "Angry" = "Angry",
  "Excited" = "Excited",
}

export interface MoodLog {
  _id: string;
  user: string;
  mood: Moods;
  date: Date;
  note?: string;
  isDeleted: boolean;
}

export type MoodLogUpdate = Pick<MoodLog, "mood" | "note">;
