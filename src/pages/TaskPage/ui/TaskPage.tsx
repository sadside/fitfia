import styles from './TaskPage.module.scss';
import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {getTaskByIdThunk} from 'src/entities/Task/taskThunks.ts';
import {Loader} from 'src/shared/ui/Loader';
import {ANSWER_TYPES} from 'src/entities/Task/taskModel.ts';

interface TaskPageProps {
    className?: string;
}

export const TaskPage: FC<TaskPageProps> = ({}: TaskPageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const id = +window.location.pathname.replace('/task/', '');
        dispatch(getTaskByIdThunk(id));
    }, []);

    const task = useAppSelector(state => state.tasks.fullTask);
    const status = useAppSelector(state => state.tasks.status);
    // if (task) task.answerType = ANSWER_TYPES.MANUAL;

    return (
        <div className={styles.curTaskFull}>
            <div className={styles.header}>
                <p className={styles.taskTitle}>ПОЧЕМУ Я ЗДЕСЬ...</p>
                <div className={styles.border}></div>
            </div>
            {status === 'loading full task' && !task && (
                <div style={{height: 200}}>
                    <Loader height={50} width={50} />
                </div>
            )}
            {status === 'idle' && task && (
                <div className={styles.cont}>
                    <div className={styles.container}>
                        <div className={styles.description}>
                            Task: {task?.content}
                        </div>
                        <div className={styles.price}>
                            PRICE: {task?.taskInfo.potentialPoints}
                        </div>
                        <div className={styles.cunt}>
                            <div className={styles.answTxt}>ОТВЕТ:</div>

                            {task.answerType === ANSWER_TYPES.MANUAL ? (
                                <label className={styles.uploadFile}>
                                    <input type="file" />
                                    Загрузить файл
                                </label>
                            ) : (
                                <input className={styles.answer}></input>
                            )}
                            <button type="submit" className={styles.answerButt}>
                                send
                            </button>
                        </div>
                        <div className={styles.status}>asdads</div>
                    </div>
                </div>
            )}
        </div>
    );
};
