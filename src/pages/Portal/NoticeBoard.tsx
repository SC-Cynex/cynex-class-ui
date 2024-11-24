import React from "react";
import { Card } from "antd";
import styles from "./NoticeBoard.module.css";

interface Notice {
    id: number;
    title: string;
    description: string;
    date?: string;
}

interface NoticeBoardProps {
    notices: Notice[];
}

const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
    return (
        <div className={styles.noticeBoard}>
            <ul className={styles.noticeList}>
                {notices.map((notice) => (
                    <li key={notice.id} className={styles.noticeItem}>
                        <Card className={styles.noticeCard} bordered>
                            <h3 className={styles.noticeItemTitle}>{notice.title}</h3>
                            {notice.date && (
                                <p className={styles.noticeDate}>
                                    <strong>Data:</strong> {notice.date}
                                </p>
                            )}
                            <p className={styles.noticeDescription}>{notice.description}</p>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoticeBoard;
