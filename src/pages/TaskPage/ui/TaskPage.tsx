import styles from './TaskPage.module.scss'
import {FC} from "react";

interface TaskPageProps {
    className?: string,
}

export const TaskPage: FC<TaskPageProps> = ({}: TaskPageProps) => {
    return (
        <>
            <div className={styles.curTtaskFull}>
                <h1>Задачи</h1>
            </div>
        </>
    );
};
