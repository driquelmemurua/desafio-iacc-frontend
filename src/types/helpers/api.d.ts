import { Course } from "@/types/course";
import { Student } from "@/types/student";

export type GetCoursesResponse = Array<Course>;

export type GetCourseByIdResponse = Course & {
  students: Array<Student>;
};