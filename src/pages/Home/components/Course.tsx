import React from 'react';
import engineerCivil from "../../../assets/engineer-civil.jpg";
import design from "../../../assets/design.jpg";
import law from "../../../assets/law.jpg";
import medicine from "../../../assets/medicine.jpg";
import electricalEngineering from "../../../assets/electrical-engineering.jpg";
import administration from "../../../assets/administration.jpg";
import nursing from "../../../assets/nursing.jpg";
import chemicalEngineering from "../../../assets/chemical-engineering.jpg";
import { Row, Col, Card, Button, Carousel } from 'antd';
import styles from './Course.module.css';

const { Meta } = Card;

const Course: React.FC = () => {
    const cursos = [
        {
            title: 'Engenharia Civil',
            school: 'ESCOLA POLITÉCNICA',
            image: engineerCivil
        },
        {
            title: 'Design',
            school: 'ESCOLA DE ARQUITETURA E DESIGN',
            image: design
        },
        {
            title: 'Direito',
            school: 'ESCOLA DE DIREITO',
            image: law
        },
        {
            title: 'Medicina',
            school: 'ESCOLA DE SAÚDE',
            image: medicine
        },
        {
            title: 'Engenharia Elétrica',
            school: 'ESCOLA POLITÉCNICA',
            image: electricalEngineering
        },
        {
            title: 'Administração',
            school: 'ESCOLA DE NEGÓCIOS',
            image: administration
        },
        {
            title: 'Enfermagem',
            school: 'ESCOLA DE SAÚDE',
            image: nursing
        },
        {
            title: 'Engenharia Química',
            school: 'ESCOLA POLITÉCNICA',
            image: chemicalEngineering
        }
    ];

    const chunkArray = (array: any[], size: number) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, size + i));
        }
        return chunkedArr;
    };

    const cursoGroups = chunkArray(cursos, 3);

    return (
        <Carousel
            adaptiveHeight
            arrows
            draggable
            autoplay
            autoplaySpeed={5000}
        >
            {cursoGroups.map((group, index) => (
                <div key={index} className={styles.carouselGroup}>
                    <Row gutter={[16, 16]} style={{margin: '0px 1px 0 1px'}}>
                        {group.map((course, i) => (
                            <Col key={i} span={8}>
                                <Card
                                    hoverable
                                    cover={<img alt={course.title} src={course.image} />}
                                    className={styles.card}
                                >
                                    <Meta title={course.title} description={course.school} />
                                    <Button type="primary" className={styles.button} href='/registration'>
                                        Inscreva-se
                                    </Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </Carousel>
    );
};

export default Course;
