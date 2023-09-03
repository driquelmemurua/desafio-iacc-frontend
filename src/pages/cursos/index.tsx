import { Table } from "antd";
import Link from "next/link";
import { getCourses } from "@/helpers/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Course } from "@/types/course";
import { CoursesProps } from "@/types/pages/cursos";
import { PageContent } from "@/components/PageContent";

export const getServerSideProps: GetServerSideProps<CoursesProps> = async () => {
  const courses = (await getCourses()).map((course) => ({ ...course, key: course.id.toString() }));

  return {
    props: {
      courses,
      title: 'Cursos',
    }
  };
}

export default function Courses({
  courses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      render: (name: string, course: Course) => <Link href={`/cursos/${course.id}`}>{name}</Link>
    },
    {
      title: 'Código',
      dataIndex: 'code',
    },
    {
      title: 'Año',
      dataIndex: 'year',
    },
    {
      title: 'Semestre',
      dataIndex: 'semester',
    },
    {
      title: 'Sede',
      dataIndex: 'campus',
    }
  ];

  return (
    <PageContent
      title='Cursos'
      breadcrumbs={[{
        title: 'Cursos',
      }]}>
      <Table
        pagination={false}
        dataSource={courses}
        columns={columns} />
    </PageContent>
  );
}