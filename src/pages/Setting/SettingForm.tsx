import { useState } from 'react';
import { Form, Button, Input, Col, Row, Select } from "antd";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import styles from "./SettingForm.module.css";

interface FormValues {
    name: string;
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

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = (values: FormValues) => {
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
                        name="name"
                        label="Nome"
                        rules={[{ required: true, message: 'Preencha o campo de nome!' }]}
                        hasFeedback
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
                        hasFeedback
                    >
                        <Input size="large" disabled />
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle" gutter={20}>
                <Col span={12}>
                    <Form.Item
                        name="user"
                        label="Usuário"
                        rules={[{ required: true, message: 'Preencha o campo de usuário!' }]}
                        hasFeedback
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
                        hasFeedback
                    >
                        <Input.Password size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
            </Row>
            <div className={styles.formTitle}>
                <FaMapMarkerAlt size={30} />
                <h2>Endereço</h2>
            </div>
            <Row align="middle" gutter={20}>
                <Col span={12}>
                    <Form.Item
                        name="city"
                        label="Cidade"
                        rules={[{ required: true, message: 'Preencha o campo de cidade!' }]}
                        hasFeedback
                    >
                        <Input size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="state"
                        label="Estado"
                        rules={[{ required: true, message: 'Preencha o campo de estado!' }]}
                        hasFeedback
                    >
                        <Input size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle" gutter={20}>
                <Col span={12}>
                    <Form.Item
                        name="zipCode"
                        label="CEP"
                        rules={[{ required: true, min: 8, message: 'Preencha o campo de CEP!' }]}
                        hasFeedback
                    >
                        <Input size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="street"
                        label="Rua"
                        rules={[{ required: true, message: 'Preencha o campo de rua!' }]}
                        hasFeedback
                    >
                        <Input size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle" gutter={20}>
                <Col span={12}>
                    <Form.Item
                        name="neighborhood"
                        label="Bairro"
                        rules={[{ required: true, message: 'Preencha o campo de bairro!' }]}
                        hasFeedback
                    >
                        <Input size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="number"
                        label="Número"
                        rules={[{ required: true, message: 'Preencha o campo de número!' }]}
                        hasFeedback
                    >
                        <Input size="large" disabled={!isEditing} />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                {isEditing ? (
                    <Row gutter={20}>
                        <Col span={12}>
                            <Button type="primary" htmlType="submit" block size="large">Salvar</Button>
                        </Col>
                        <Col span={12}>
                            <Button block size="large" onClick={handleCancel}>Cancelar</Button>
                        </Col>
                    </Row>
                ) : (
                    <Button type="primary" block size="large" onClick={handleEdit}>Editar</Button>
                )}
            </Form.Item>
        </Form>
    );
}
