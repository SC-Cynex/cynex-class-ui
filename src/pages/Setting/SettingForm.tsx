import { useEffect, useState } from 'react';
import { Form, Button, Input, Col, Row, Select } from "antd";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import styles from "./SettingForm.module.css";
import actions from "./actionSettings";

interface FormValues {
    username: string;
    email: string;
    user: number;
    password: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    number: string;
}

export default function SettingForm() {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState<boolean>(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await actions.getUser();
                const userData = response.data;

                form.setFieldsValue({
                    username: userData.Username,
                    email: userData.Email,
                    user: userData.RoleID,
                    password: userData.Password,
                });
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        };

        fetchUserData();
    }, [form]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = (_values: FormValues) => {
        setIsEditing(false);
    };

    return (
        <Form
            form={form}
            layout='vertical'
            style={{ width: '70vw' }}
            onFinish={handleSave}
        >
            <div className={styles.formTitle}>
                <FaUserAlt size={30} />
                <h2>Dados Gerais</h2>
            </div>
            <Row align="middle" gutter={20}>
                <Col span={12}>
                    <Form.Item
                        name="username"
                        label="Usuário"
                        rules={[{ required: true, message: 'Preencha o campo de usuário!' }]}
                    >
                        <Input size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: 'Preencha o campo de email!' },
                            { type: "email", message: "Email inválido!" }
                        ]}
                    >
                        <Input size="large" disabled />
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle" gutter={20}>
                <Col span={12}>
                    <Form.Item
                        name="user"
                        label="Tipo de Usuário"
                        rules={[{ required: true, message: 'Preencha o campo de tipo de usuário!' }]}
                    >
                        <Select
                            size="large"
                            options={[
                                { label: 'Professor', value: 1 },
                                { label: 'Aluno', value: 2 }
                            ]}
                            disabled
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="password"
                        label="Senha"
                        rules={[
                            { required: true, message: 'Preencha o campo de senha!' },
                            { min: 6, message: 'A senha deve ter pelo menos 6 caracteres!' }
                        ]}
                    >
                        <Input.Password size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}
