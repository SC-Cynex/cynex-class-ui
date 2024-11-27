import React, { useEffect, useState } from "react";
import { Card, Row, Col, Empty } from "antd";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { Breadcrumb } from "antd";
import { FaUsers } from "react-icons/fa6";
import actions from "./actionClass";

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaUsers />,
                },
                {
                    href: '',
                    title: 'Turmas',
                }
            ]}
        />
    );
};

const ClassPage: React.FC = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClass = async () => {
            try {
                const response = await actions.getClass();
                const classData = response.data;

                console.log("classData", classD)

                const formattedClasses = classData.map((classItem: any) => ({
                    key: classItem.ID.toString(),
                    id_class: classItem.ID,
                    name_class: classItem.Name,
                    semester: classItem.Semester,
                    subject: classItem.SubjectID,
                    day_subject: classItem.Day,
                    course: classItem.CourseID,
                    period: classItem.Period,
                }));

                setClasses(formattedClasses);
            } catch (error) {
                console.error("Erro ao buscar cursos:", error);
            }
        };

        fetchClass();
    }, []);

    return (
        <DefaultFrame title="Turmas" breadcrumb={<BreadcrumbComponent />}>
            <div style={{ padding: '20px' }}>
                {classes.length > 0 ? (
                    <Row gutter={[24, 24]} justify={'right'}>
                        {classes.map((turma) => (
                            <Col key={turma.key} xs={24} sm={12} md={8} lg={6}>
                                <Card
                                    title={
                                        <h3 style={{ fontWeight: 'bold', color: '#323130', marginBottom: '8px' }}>
                                            {turma.name_class}
                                        </h3>
                                    }
                                    bordered={false}
                                    hoverable
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderRadius: '12px',
                                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)',
                                        transition: 'all 0.3s ease-in-out',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                    }}
                                    bodyStyle={{
                                        padding: '16px',
                                        fontSize: '14px',
                                        color: '#5e5e5e',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                                        (e.currentTarget as HTMLElement).style.backgroundColor = '#e3e4e8';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <p style={{ margin: '0', color: '#6e6e6e' }}>{`Curso: ${turma.course}`}</p>
                                    <p style={{ margin: '0', color: '#6e6e6e' }}>{`Disciplina: ${turma.subject}`}</p>
                                    <p style={{ margin: '0', color: '#6e6e6e' }}>{`Período: ${turma.period}`}</p>
                                    <p style={{ margin: '0', color: '#6e6e6e' }}>{`Dia: ${turma.day_subject}`}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div style={{ textAlign: 'center', padding: '50px 0' }}>
                        <Empty description="Nenhuma turma disponível" />
                    </div>
                )}
            </div>
        </DefaultFrame>
    );
};

export default ClassPage;
