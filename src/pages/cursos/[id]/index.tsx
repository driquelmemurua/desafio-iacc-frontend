import { PageContent } from "@/components/PageContent";
import { getCourseById } from "@/helpers/api";
import { CourseDetailsProps } from "@/types/pages/cursos/[id]";
import { Table } from "antd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<CourseDetailsProps> = async (context) => {
  const { id } = context.params as { id: string };
  const { name, students } = await getCourseById(parseInt(id));
  
  return {
    props: {
      courseName: name,
      students: students.map((student) => ({ ...student, key: student.id.toString() })),
    }
  }
}

export default function CourseDetails({
  courseName,
  students,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'firstName',
    },
    {
      title: 'Apellido',
      dataIndex: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Edad',
      dataIndex: 'age',
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
    }
  ];

  return (
    <PageContent
      title='Estudiantes'
      breadcrumbs={[{
        title: <Link href='/cursos'>Cursos</Link>
      }, {
        title: courseName,
      }]}>
      <Table
        pagination={false}
        dataSource={students}
        columns={columns} />
    </PageContent>
  );
}