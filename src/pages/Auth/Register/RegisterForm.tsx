import { useState } from 'react';
import { Form, Button, Input, Select, Col, Row } from "antd";
import styles from "./RegisterForm.module.css";
import { FaUserAlt } from "react-icons/fa";
import actions from './action';

interface AddressData {
    city: string;
    state: string;
    neighborhood: string;
    street: string;
}

interface RegisterValues {
    username: string;
    email: string;
    password: string;
    is_active: boolean;
    cep: string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    number: string;
}

export default function RegisterForm() {
    const [form] = Form.useForm();

    const handleRegister = async (values: RegisterValues) => {
        try {
            values.is_active = true;
            await actions.createUser(values);
            console.log('Usuário registrado com sucesso!');
            form.resetFields(); 
        } catch (error) {
            console.error('Erro ao registrar o usuário:', error);
        }
    };

    return (
        <Form
            form={form}
            layout='vertical'
            style={{ width: '70vw' }}
            onFinish={handleRegister}
        >
            <div className={styles.formTitle}>
                <FaUserAlt size={30} />
                <h2>Dados Gerais</h2>
            </div>
            <Row align="middle" gutter={20}>
                <Col span={12}>
                    <Form.Item
                        name="username"
                        label="Nome de Usuário"
                        rules={[{ required: true, message: 'Preencha o campo de usuário!' }]}
                        hasFeedback
                    >
                        <Input size="large" />
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
                        <Input size="large" />
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle" gutter={20}>
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
                        <Input.Password size="large" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                        <Form.Item
                            name="role"
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
                            />
                        </Form.Item>
                    </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                    Registrar
                </Button>
            </Form.Item>
        </Form>
    );
}
