import { Form, Button, Input, Select, Col, Row } from "antd";
import styles from "./RegisterForm.module.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import actions from "./actionClass";
import { useState, useEffect } from "react";
import subjectsByCourse from "../../utils/subjectsByCourse";

interface RegisterClassValues {
  className: string;
  semester: string;
  teacher: number;
  subject: number;
  week: string;
  course: number;
  period: string;
}

export default function RegisterClassForm() {
  const [form] = Form.useForm();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await actions.getTeacher();
        const teacherData = response.data;

        const formattedTeachers = teacherData.map((teacher: { Username: any; UserID: any; }) => ({
          label: teacher.Username,
          value: teacher.UserID,
        }));

        setTeachers(formattedTeachers);
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      }
    };

    fetchTeachers();
  }, []); 

  const handleRegister = async (values: RegisterClassValues) => {
    await actions.registerClass(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ width: "70vw" }}
      onFinish={handleRegister}
    >
      <div className={styles.formTitle}>
        <FaChalkboardTeacher size={30} />
        <h2>Dados da Turma</h2>
      </div>
      <Row align="middle" gutter={20}>
        <Col span={12}>
          <Form.Item
            name="className"
            label="Nome da Turma"
            rules={[{ required: true, message: "Preencha o nome da turma!" }]}
            hasFeedback
          >
            <Input size="large" placeholder="Ex: Turma A" />
          </Form.Item>
        </Col>
        <Col span={12}>
  <Form.Item
    name="semester"
    label="Semestre"
    rules={[{ required: true, message: "Preencha o semestre!" }]}
    hasFeedback
  >
    <Select
      size="large"
      placeholder="Selecione o Semestre"
      options={[
        ...Array.from({ length: 12 }, (_, i) => ({
          label: `${i + 1}° Semestre`,
          value: `${i + 1}° Semestre`,
        })),
      ]}
    />
  </Form.Item>
</Col>

      </Row>
      <Row align="middle" gutter={20}>
        <Col span={12}>
          <Form.Item
            name="teacher"
            label="Professor"
            rules={[{ required: true, message: "Selecione o professor!" }]}
            hasFeedback
          >
            <Select
              size="large"
              placeholder="Selecione o professor"
              options={teachers}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="subject"
            label="Matéria"
            rules={[
              {
                required: true,
                message: "Selecione a Matéria!",
              },
            ]}
            hasFeedback
          >
            <Select
              size="large"
              placeholder="Selecione a Matéria"
              options={subjectsByCourse}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" gutter={20}>
        <Col span={12}>
          <Form.Item
            name="week"
            label="Dia da Matéria"
            rules={[{ required: true, message: "Selecione o dia da Matéria!" }]}
            hasFeedback
          >
            <Select
              size="large"
              placeholder="Selecione o dia da Matéria"
              options={[
                { label: "Segunda-feira", value: "Segunda-feira" },
                { label: "Terça-feira", value: "Terça-feira" },
                { label: "Quarta-feira", value: "Quarta-feira" },
                { label: "Quinta-feira", value: "Quinta-feira" },
                { label: "Sexta-feira", value: "Sexta-feira" },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="course"
            label="Curso"
            rules={[{ required: true, message: "Selecione um curso!" }]}
            hasFeedback
          >
            <Select
              size="large"
              placeholder="Selecione o Curso"
              options={[
                { label: "Eng. de Software", value: "Eng. de Software" },
                { label: "Eng. Eletrônica", value: "Eng. Eletrônica" },
                { label: "Eng. Mecânica", value: "Eng. Mecânica" },
                { label: "Biomedicina", value: "Biomedicina" },
                { label: "Pedagogia", value: "Pedagogia" },
                { label: "Direito", value: "Direito" },
                { label: "Design", value: "Design" },
                { label: "Eng. Química", value: "Eng. Química" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" gutter={20}>
        <Col span={12}>
          <Form.Item
            name="period"
            label="Período"
            rules={[{ required: true, message: "Selecione o período!" }]}
            hasFeedback
          >
            <Select
              size="large"
              placeholder="Selecione o período"
              options={[
                { label: "Manhã", value: "Manhã" },
                { label: "Tarde", value: "Tarde" },
                { label: "Noite", value: "Noite" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Registrar Turma
        </Button>
      </Form.Item>
    </Form>
  );
}
