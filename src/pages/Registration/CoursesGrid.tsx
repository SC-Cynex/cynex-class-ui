import React, { useEffect, useState } from "react";
import { Modal, Button, Space, Table, message } from "antd";
import type { TableProps } from "antd";
import actions from "./RegistrationService";

interface DataType {
  key: string;
  id_class: number;
  name_class: string;
  semester: string;
  subject: string;
  day_subject: string;
  course: string;
  period: string;
  name_teacher: string
}

const CoursesGrid: React.FC = () => {
  const [classes, setClasses] = useState<DataType[]>([]);
  const [userClasses, setUserClasses] = useState<number[]>([]);

  useEffect(() => {
    
    const fetchClasses = async () => {
      try {
        const response = await actions.getClass();
        const classData = response.data;

        const formattedClasses = classData.map((classItem: any) => ({
          key: classItem.ID.toString(),
          id_class: classItem.ID,
          name_class: classItem.Name,
          semester: classItem.Semester,
          subject: classItem.SubjectID,
          day_subject: classItem.Day,
          course: classItem.CourseID,
          period: classItem.Period,
          name_teacher: classItem.TeacherName
        }));

        setClasses(formattedClasses);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      }
    };

    const fetchUserClasses = async () => {
      try {
        const response = await actions.getClassUser();
        const userClassIds = response.data.map((item: any) => item.class_id);
        setUserClasses(userClassIds);
      } catch (error) {
        console.error("Erro ao buscar turmas do usuário:", error);
      }
    };

    fetchClasses();
    fetchUserClasses();
  }, []);

  const openModalRegistration = (course: DataType) => {
    const isSamePeriod = classes.some(
      (userClass) => 
        userClass.period === course.period && 
        userClasses.includes(userClass.id_class)
    );
  
    if (isSamePeriod) {
      message.error(`Você já está inscrito em uma turma no mesmo período.`);
      return;
    }
  
    Modal.confirm({
      title: `Inscrição na turma: ${course.name_class}`,
      content: (
        <div>
          <p>
            Você está prestes a se inscrever na turma <strong>{course.name_class}</strong>.
          </p>
          <p>Curso: {course.course}</p>
          <p>Disciplina: {course.subject}</p>
          <p>Semestre: {course.semester}</p>
          <p>Dia: {course.day_subject}</p>
          <p>Período: {course.period}</p>
        </div>
      ),
      width: 800,
      onOk: async () => {
        try {
          await actions.inscription(course.id_class);
          message.success(`Inscrição realizada com sucesso na turma: ${course.name_class}`);
          setUserClasses((prev) => [...prev, course.id_class]);
        } catch (error) {
          console.error("Erro ao realizar inscrição:", error);
          message.error("Erro ao realizar inscrição. Tente novamente.");
        }
      },
      onCancel() {
        console.log("Inscrição cancelada");
      },
    });
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "ID da Turma",
      dataIndex: "id_class",
      key: "id_class",
    },
    {
      title: "Nome da Turma",
      dataIndex: "name_class",
      key: "name_class",
    },
    {
      title: "Curso",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Disciplina",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Professor",
      dataIndex: "name_teacher",
      key: "name_teacher",
    },
    {
      title: "Semestre",
      dataIndex: "semester",
      key: "semester",
    },
    {
      title: "Dia da Disciplina",
      dataIndex: "day_subject",
      key: "day_subject",
    },
    {
      title: "Período",
      dataIndex: "period",
      key: "period",
    },
    {
      title: "Ações",
      key: "action",
      align: "center",
      render: (_, record) => {
        const isAlreadyRegistered = userClasses.includes(record.id_class);

        return (
          <Space size="middle">
            {isAlreadyRegistered ? (
              <Button disabled>Já inscrito</Button>
            ) : (
              <Button onClick={() => openModalRegistration(record)}>
                Inscrever-se na {record.name_class}
              </Button>
            )}
          </Space>
        );
      },
    },
  ];

  return <Table<DataType> columns={columns} dataSource={classes} />;
};

export default CoursesGrid;
