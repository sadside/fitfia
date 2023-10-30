import styles from './TasksPage.module.scss';
import {FC, useEffect} from 'react';
import {StageCounter} from 'src/widgets/stageCounter/ui/StageCounter.jsx';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {
    getStageInfoThunk,
    getTasksThunk,
} from 'src/entities/Task/taskThunks.ts';
import {Task as TaskComponent} from 'src/widgets/task';
import {CLIENT_STAGES, STAGES, Task} from 'src/entities/Task/taskModel.ts';
import {Loader} from 'src/shared/ui/Loader';

interface TasksPageProps {
    className?: string;
}

export const TasksPage: FC<TasksPageProps> = () => {
    const tasks = useAppSelector(state => state.tasks.tasksMaps);
    const clientStage = useAppSelector(state => state.tasks.menuCurrentStage);
    const stage = useAppSelector(state => state.tasks.currentStage);
    const status = useAppSelector(state => state.tasks.status);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasksThunk());
        dispatch(getStageInfoThunk());
    }, []);

    // @ts-ignore
    return (
        <div className={styles.wrapper}>
            <div className={styles.listOfTasks}>
                <div className={styles.header}>
                    <div className={styles.stageSwitcher}>
                        <p className={styles.switchText}>Choose the stage</p>
                        <StageCounter
                            stage={CLIENT_STAGES.ZERO}
                            unlocked={
                                stage === STAGES.ZERO ||
                                stage === STAGES.ONE ||
                                stage === STAGES.TWO
                            }
                        />
                        <StageCounter
                            stage={CLIENT_STAGES.ONE}
                            unlocked={
                                stage === STAGES.ONE || stage === STAGES.TWO
                            }
                        />
                        <StageCounter
                            stage={CLIENT_STAGES.TWO}
                            unlocked={stage === STAGES.TWO}
                        />
                    </div>
                </div>
                <div className={styles.taskBorder}></div>
                <div className={styles.scroll}>
                    {status === 'loading' && <Loader width={60} height={60} />}
                    {status === 'error' && <div>Произошла ошибка :(</div>}
                    {tasks[clientStage]?.length &&
                        status == 'idle' &&
                        tasks[clientStage].map((task: Task) => {
                            return (
                                <TaskComponent
                                    points={task.potentialPoints}
                                    title={task.title}
                                    status={task.status}
                                    key={task.id}
                                    id={task.id}
                                />
                            );
                        })}

                    {!tasks[clientStage].length && (
                        <div className={styles.locked}>
                            Заданий нет, мы вам перезвоним👋
                            <br />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
