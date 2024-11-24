import { Form, Button, Input, Select, Col, Row } from "antd";
import styles from "./RegisterForm.module.css";
import { FaChalkboardTeacher} from "react-icons/fa";

interface RegisterClassValues {
  className: string;
  semester: string;
  teacher: string;
  subject: string;
}

export default function RegisterClassForm() {
  const [form] = Form.useForm();

  const handleRegister = async (values: RegisterClassValues) => {
    console.log(values);
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
            <Input size="large" placeholder="Ex: 2024.1" />
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
              options={[
                { label: "Professor 1", value: "professor1" },
                { label: "Professor 2", value: "professor2" },
                { label: "Professor 3", value: "professor3" },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="subject"
            label="Matéria"
            rules={[{ required: true, message: "Selecione a Matéria!" }]}
            hasFeedback
          >
            <Select
              size="large"
              placeholder="Selecione a Matéria"
              options={[
                { label: "Matéria 1", value: "Matéria1" },
                { label: "Matéria 2", value: "Matéria2" },
                { label: "Matéria 3", value: "Matéria3" },
              ]}
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
                { label: "Segunda-feira", value: "monday" },
                { label: "Terça-feira", value: "tuesday" },
                { label: "Quarta-feira", value: "wednesday" },
                { label: "Quinta-feira", value: "thursday" },
                { label: "Sexta-feira", value: "friday" },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="courses"
            label="Cursos"
            rules={[
              { required: true, message: "Selecione pelo menos um curso!" },
            ]}
            hasFeedback
          >
            <Select
              mode="multiple"
              size="large"
              placeholder="Selecione os Cursos"
              options={[
                { label: "Eng. de Software", value: 1 },
                { label: "Eng. Eletrônica", value: 2 },
                { label: "Eng. Mecânica", value: 3 },
                { label: "Biomedicina", value: 4 },
                { label: "Pedagogia", value: 5 },
                { label: "Direito", value: 6 },
                { label: "Design", value: 7 },
                { label: "Eng. Química", value: 8 },
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
