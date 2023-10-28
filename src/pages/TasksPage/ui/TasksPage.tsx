import styles from './TasksPage.module.scss';
import {FC, useEffect} from 'react';
import {Task} from 'src/widgets/task/ui/Task.tsx';
import {StageCounter} from 'src/widgets/stageCounter/ui/StageCounter.jsx';
import {useAppDispatch} from 'src/shared/utils/hooks/redux.ts';
import {getTasksThunk} from 'src/entities/Task/taskThunks.ts';

interface TasksPageProps {
    className?: string;
}

export const TasksPage: FC<TasksPageProps> = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasksThunk());
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.listOfTasks}>
                <div className={styles.header}>
                    <p className={styles.taskHeader}>Tasks</p>
                    <div className={styles.stageSwitcher}>
                        <p className={styles.switchText}>choose the stage</p>
                        <StageCounter stage={0} />
                        <StageCounter stage={1} />
                        <StageCounter stage={2} />
                    </div>
                </div>
                <div className={styles.taskBorder}></div>

                <div className={styles.scroll}>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </div>
    );
};
