import React, { useEffect, useState } from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { Badge, Breadcrumb } from "antd";
import styles from "./TimeTablePage.module.css";
import { FaRegCalendarPlus } from "react-icons/fa6";
import actions from "./actionTable";

interface ClassDataType {
    key: string;
    user_id: number;
    class_id: number;
    name_class: string;
    semester: string;
    subject: string;
    day_subject: string;
    course: string;
    period: string;
    created_at: string;
    updated_at: string;
    teacher_name: string;
}

const BreadcrumbComponent: React.FC = () => {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <FaRegCalendarPlus />,
                },
                {
                    href: '',
                    title: 'Quadro de Horários',
                }
            ]}
        />
    );
};

const getSubjectColor = (subject: string) => {
    let hash = 0;
    for (let i = 0; i < subject.length; i++) {
        hash = subject.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = '#' + ((hash >> 24) & 0xFF).toString(16).padStart(2, '0') +
        ((hash >> 16) & 0xFF).toString(16).padStart(2, '0') +
        ((hash >> 8) & 0xFF).toString(16).padStart(2, '0');
    return color.slice(0, 7);
};

const daysOfWeek = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];

const TimeTablePage: React.FC = () => {
    const [allClassesData, setAllClassesData] = useState<ClassDataType[]>([]);

    useEffect(() => {
        const fetchUserClasses = async () => {
            try {
                const response = await actions.getClassUser();
                const userClasses = response.data;

                const promises = userClasses.map(async (classItem: any) => {
                    const userId = classItem.class_id;

                    const classResponse = await actions.getClass(userId);
                    return classResponse.data;
                });

                const allClasses = await Promise.all(promises);

                const flattenedClasses = allClasses.flat().map((item: any) => ({
                    key: item.ID.toString(),
                    user_id: item.TeacherID,
                    class_id: item.ID,
                    name_class: item.Name,
                    semester: item.Semester,
                    subject: item.SubjectID,
                    day_subject: item.Day,
                    course: item.CourseID,
                    period: item.Period,
                    created_at: item.CreatedAt,
                    updated_at: item.UpdatedAt,
                    teacher_name: item.TeacherName
                }));

                setAllClassesData(flattenedClasses);
            } catch (error) {
                console.error("Erro ao buscar as turmas do usuário:", error);
            }
        };

        fetchUserClasses();
    }, []);

    return (
        <DefaultFrame title="Quadro de Horários" breadcrumb={<BreadcrumbComponent />}>
    <div className={styles.gridContainer}>
        {daysOfWeek.map((day) => {
            const classesForDay = allClassesData.filter((classItem) => classItem.day_subject === day);

            return (
                <div key={day} className={styles.gridItem}>
                    <h3 className={styles.dayTitle}>{day}</h3>
                    {classesForDay.length > 0 ? (
                        <ul className={styles.subjectList}>
                            {classesForDay.map((item) => (
                                <li key={`${item.subject}-${item.class_id}`} className={styles.subjectItem}>
                                    <div className={styles.subjectCard}>
                                        <h4 className={styles.subjectName} style={{ color: getSubjectColor(item.subject) }}>
                                            {item.subject}
                                        </h4>
                                        <p className={styles.teacherName}>
                                            <strong>Professor:</strong> {item.teacher_name}
                                        </p>
                                        <div className={styles.details}>
                                            <p><strong>Curso:</strong> {item.course}</p>
                                            <p><strong>Período:</strong> {item.period}</p>
                                            <p><strong>Semestre:</strong> {item.semester}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.noSubjects}>Nenhuma matéria programada.</p>
                    )}
                </div>
            );
        })}
    </div>
</DefaultFrame>

    );
};

export default TimeTablePage;
