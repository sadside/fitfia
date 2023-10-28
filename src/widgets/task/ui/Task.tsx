import {Link} from 'react-router-dom';
import styles from './Task.module.scss';

interface ProfileProps {
    className?: string;
}

export const Task = ({}: ProfileProps) => {
    return (
        <div className={styles.task}>
            <div className={styles.container}>
                <Link to="/task" className={styles.taskHeader}>
                    qweqwe
                </Link>
                <div className={styles.taskDescription}>
                    qweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweqqweqewqweqweqweq
                </div>
                <div className={styles.taskStatus}>asdads</div>
                <div className={styles.taskPrice}>300</div>
            </div>
        </div>
    );
};
