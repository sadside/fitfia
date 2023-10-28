import styles from './TaskPage.module.scss'
import {FC} from "react";

interface TaskPageProps {
    className?: string,
}

export const TaskPage: FC<TaskPageProps> = ({}: TaskPageProps) => {
    return (
        <>
            <div className={styles.curTaskFull}>
                <div className={styles.header}>
                    <p className={styles.taskTitle}>qweqewqwe</p>
                    <div className={styles.border}></div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.container}>
                        <div className={styles.description}>qweqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweq</div>
                        <input className={styles.answer}></input>
                        <div className={styles.status}>asdads</div>
                        <div className={styles.price}>300</div>
                    </div>
                    <div className={styles.img}></div>
                </div>
                
            </div>
        </>
    );
};
