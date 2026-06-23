/** Supported class durations in minutes — admin/teachers can enable subsets per teacher. */
export const CLASS_DURATIONS = [20, 25, 30, 35, 40] as const

export type ClassDuration = (typeof CLASS_DURATIONS)[number]

/** 0 = Sunday, 6 = Saturday */
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface TimeSlot {
  start: string
  end: string
}

export interface TeacherSchedule {
  timezone: string
  availableDays: DayOfWeek[]
  availableTimings: TimeSlot[]
  classDurations: ClassDuration[]
}

export const DEFAULT_TEACHER_SCHEDULE: TeacherSchedule = {
  timezone: "Asia/Karachi",
  availableDays: [],
  availableTimings: [],
  classDurations: [...CLASS_DURATIONS],
}
