import styles from './TaskPage.module.scss';
import {ChangeEvent, FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {getTaskByIdThunk, sendAnswerFileThunk, sendAnswerThunk,} from 'src/entities/Task/taskThunks.ts';
import {Loader} from 'src/shared/ui/Loader';
import {toast} from 'react-toastify';
import {ANSWER_TYPES, TASK_STATUSES} from 'src/entities/Task/taskModel.ts';
import {useNavigate} from 'react-router-dom';
import FormattedMessage from 'src/shared/ui/formatted-message/FormattedMessage.tsx';

// import {ANSWER_TYPES} from 'src/entities/Task/taskModel.ts';

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

    const [selectedFile, setSelectedFile] = useState<File>();
    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const [answer, setAnswer] = useState('');

    const handleSubmit = () => {
        if (task?.answerType === ANSWER_TYPES.MANUAL) {
            if (selectedFile && task) {
                const data = new FormData();
                data.append('file', selectedFile);

                dispatch(
                    sendAnswerFileThunk({data: data, id: task.taskInfo.id})
                );
            } else {
                toast.error('Загрузи файл');
            }
        } else {
            if (answer.length && task)
                dispatch(sendAnswerThunk({answer, id: task.taskInfo.id}));

            setAnswer('');
        }
    };

    if (status === 'error with full tasks') {
        navigate('/');
    }

    return (
        <div className={styles.curTaskFull}>
            <div className={styles.header}>
                <p className={styles.taskTitle}>ПОЧЕМУ Я ЗДЕСЬ...</p>
                <div className={styles.border}></div>
            </div>
            {status === 'loading full task' && !task && (
                <div style={{height: 200}}>
                    <Loader height={50} width={50}/>
                </div>
            )}
            <div className={styles.cont}>
                <form
                    className={styles.form}
                    action=""
                    //@ts-ignore
                    onSubmit={(e: SubmitEvent) => {
                        e.preventDefault();
                    }}>
                    {status !== 'loading full task' && task && (
                        <div className={styles.container}>
                            <div className={styles.description}>
                                Task:{' '}
                                <FormattedMessage>
                                    {task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content + task?.content}
                                </FormattedMessage>
                            </div>
                            {task.taskInfo.status !==
                                TASK_STATUSES.COMPLETED && (
                                    <div className={styles.price}>
                                        PRICE: {task?.taskInfo.potentialPoints}
                                    </div>
                                )}
                            {task.taskInfo.status ===
                                TASK_STATUSES.COMPLETED && (
                                    <div className={styles.done}>
                                        Задание выполнено
                                    </div>
                                )}
                            {task.taskInfo.status ===
                                TASK_STATUSES.AVAILABLE && (
                                    <div className={styles.cunt}>
                                        <div className={styles.answTxt}>ОТВЕТ:</div>

                                        {task.answerType === ANSWER_TYPES.MANUAL ? (
                                            <>
                                                <label
                                                    className={styles.uploadFile}>
                                                    <input
                                                        type="file"
                                                        multiple={false}
                                                        onChange={handleChange}
                                                    />
                                                    Загрузить файл
                                                </label>
                                                <div
                                                    className={styles.uploadedFile}>
                                                    {selectedFile
                                                        ? selectedFile.name
                                                        : 'Грузи, не очкуй!'}
                                                </div>
                                            </>
                                        ) : (
                                            <input
                                                className={styles.answer}
                                                onChange={(
                                                    e: ChangeEvent<HTMLInputElement>
                                                ) => setAnswer(e.target.value)}
                                                value={answer}
                                            />
                                        )}
                                        {(selectedFile || answer) && (
                                            <button
                                                type="submit"
                                                className={styles.answerButt}
                                                onClick={handleSubmit}>
                                                send
                                            </button>
                                        )}
                                    </div>
                                )}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};