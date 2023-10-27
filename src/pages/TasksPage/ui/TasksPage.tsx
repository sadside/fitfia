import styles from './TasksPage.module.scss'
import {FC} from "react";

interface TasksPageProps {
    className?: string,
}

export const TasksPage: FC<TasksPageProps> = () => {
    return (
        <>
            {/*<Profile />*/}
            <div className={styles.listOfTasks}>
                <div className={styles.header}>
                    <p className={styles.taskHeader}>Tasks</p>
                    <div className={styles.stageSwitcher}>
                        <p className={styles.switchText}>choose the stage</p>
                        {/*<div className={styles.stageNumber}><img className={styles.locked} src={locked} alt="Locked" /></div>*/}
                        {/*<div className={styles.stageNumber}><img className={styles.locked} src={locked} alt="Locked" /></div>*/}
                        {/*<div className={styles.stageNumber}><img className={styles.locked} src={locked} alt="Locked" /></div>*/}
                    </div>
                </div>
                <div className={styles.curTborder}></div>
                <div className={styles.scroll}>
                    {/*{tasks.map((task) => (*/}
                    {/*    <Task key={task.id} title={task.title} description={task.description} image={task.image} price={task.price} />*/}
                    {/*))}*/}
                </div>
            </div>
            {/*<Navbar />*/}
        </>
    );
};
