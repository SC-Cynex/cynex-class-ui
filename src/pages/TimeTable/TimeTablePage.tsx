import React from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { Badge, Breadcrumb } from "antd";
import { scheduleData } from "../../utils/scheduleDataMock";
import styles from "./TimeTablePage.module.css";
import { FaRegCalendarPlus } from "react-icons/fa6";

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
    return (
        <DefaultFrame title="Quadro de Horários" breadcrumb={<BreadcrumbComponent />}>
            <div className={styles.gridContainer}>
                {daysOfWeek.map((day) => {
                    const scheduleDataForDay = scheduleData.filter(schedule => schedule.day === day);

                    return (
                        <div key={day} className={styles.gridItem}>
                            <h3 className={styles.dayTitle}>{day}</h3>
                            {scheduleDataForDay.length > 0 ? (
                                <ul className={styles.subjectList}>
                                    {scheduleDataForDay.map((item) => (
                                        <li key={`${item.subject}-${item.time}`} className={styles.subjectItem}>
                                            <Badge
                                                color={getSubjectColor(item.subject)}
                                                text={
                                                    <div>
                                                        <strong>{item.subject}</strong> 
                                                        <br />
                                                        {item.time}
                                                        <br />
                                                        <span className={styles.professorName}>{item.professor}</span>
                                                    </div>
                                                }
                                            />
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
