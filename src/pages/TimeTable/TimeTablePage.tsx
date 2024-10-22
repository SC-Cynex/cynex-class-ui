import React, { useState } from "react";
import DefaultFrame from "../../components/Defaultframe/Defaultframe";
import { Badge, Breadcrumb, Calendar, ConfigProvider, notification } from 'antd';
import type { CalendarProps } from 'antd';
import styles from "./TimeTablePage.module.css";
import type { Dayjs } from 'dayjs';
import { scheduleData } from "../../utils/scheduleDataMock";
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

const getScheduleDataForDay = (day: string) => {
    return scheduleData.filter(schedule => schedule.day === day);
};

const TimeTablePage: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<Dayjs | null>(null);
    const [api, contextHolder] = notification.useNotification();
    
    const onSelect = (newValue: Dayjs) => {
        if (selectedValue && newValue.isSame(selectedValue, 'day')) {
            api.destroy();
            setSelectedValue(null);
        } else {
            setSelectedValue(newValue);
        }
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') {
            const dayOfWeek = current.format('dddd');
            const scheduleDataForDay = getScheduleDataForDay(dayOfWeek);

            return (
                <ul className="schedule">
                    {scheduleDataForDay.map((item) => (
                        <li key={item.subject}>
                            <Badge
                                color={getSubjectColor(item.subject)}
                                text={`${item.subject} (${item.time})`}
                            />
                        </li>
                    ))}
                </ul>
            );
        }
        return info.originNode;
    };

    return (
        <div>
            {contextHolder}
            <DefaultFrame title="Quadro de Horários" breadcrumb={<BreadcrumbComponent />}>
                <div className={styles.calendar}>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorBgContainer: '#ffffff',
                                colorPrimary: '#7a7a7a'
                            },
                        }}
                    >
                        <Calendar
                            headerRender={() => null}
                            cellRender={cellRender}
                            onSelect={onSelect}
                        />
                    </ConfigProvider>
                </div>
            </DefaultFrame>
        </div>
    );
};

export default TimeTablePage;
