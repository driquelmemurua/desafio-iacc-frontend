import { Student } from "@/types/student"

export type CourseDetailsProps = {
  courseName: string,
  students: Array<Student & { key: string }>
}
