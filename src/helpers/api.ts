import { GetCourseByIdResponse, GetCoursesResponse } from "@/types/helpers/api";

const API_BASE_URL = 'http://localhost:3000';
const COURSES_ENDPOINT = 'courses';

export async function getCourses(): Promise<GetCoursesResponse> {
    const res = await fetch(`${API_BASE_URL}/${COURSES_ENDPOINT}`);

    if (!res.ok) {
        throw new Error('Hubo un error cargando los cursos.');
    }

    return res.json();
}

export async function getCourseById(courseId: number): Promise<GetCourseByIdResponse> {
    const res = await fetch(`${API_BASE_URL}/${COURSES_ENDPOINT}/${courseId}`);

    if (!res.ok) {
        throw new Error('Hubo un error cargando la información del curso.');
    }

    return res.json();
}
