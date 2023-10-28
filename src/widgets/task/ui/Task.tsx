import {Link} from 'react-router-dom';
import styles from './Task.module.scss';

interface ProfileProps {
    title: string;
    points: string;
    status: string;
}

export const Task = ({title, status, points}: ProfileProps) => {
    return (
        <div className={styles.task}>
            <div className={styles.container}>
                <Link to="/task" className={styles.taskHeader}>
                    {title}
                </Link>
                <div className={styles.taskStatus}>{status}</div>
                <div className={styles.taskPrice}>{points}</div>
            </div>
        </div>
    );
};
