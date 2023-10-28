import styles from './TasksPage.module.scss';
import {FC, useEffect} from 'react';
import {StageCounter} from 'src/widgets/stageCounter/ui/StageCounter.jsx';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {getTasksThunk} from 'src/entities/Task/taskThunks.ts';
import {Task as TaskComponent} from 'src/widgets/task';
import {CLIENT_STAGES, Task} from 'src/entities/Task/taskModel.ts';

interface TasksPageProps {
    className?: string;
}

export const TasksPage: FC<TasksPageProps> = () => {
    const tasks = useAppSelector(state => state.tasks.tasksMaps);
    const stage = useAppSelector(state => state.tasks.menuCurrentStage);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasksThunk());
    }, []);

    // @ts-ignore
    return (
        <div className={styles.wrapper}>
            <div className={styles.listOfTasks}>
                <div className={styles.header}>
                    <p className={styles.taskHeader}>Tasks</p>
                    <div className={styles.stageSwitcher}>
                        <p className={styles.switchText}>choose the stage</p>
                        <StageCounter stage={CLIENT_STAGES.ZERO} />
                        <StageCounter stage={CLIENT_STAGES.ONE} />
                        <StageCounter stage={CLIENT_STAGES.TWO} />
                    </div>
                </div>
                <div className={styles.taskBorder}></div>
                <div className={styles.scroll}>
                    {tasks[stage] ? (
                        tasks[stage].map((task: Task) => {
                            return (
                                <TaskComponent
                                    points={task.potentialPoints}
                                    title={task.title}
                                    status={task.status}
                                    key={task.id}
                                />
                            );
                        })
                    ) : (
                        <div>Тасок нет иди нахуй</div>
                    )}
                </div>
            </div>
        </div>
    );
};
