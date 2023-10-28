import styles from './StageCounter.module.scss';
import {Link} from 'react-router-dom';
import {FC} from 'react';

interface StageCounterProps {
    stage: number;
}

export const StageCounter: FC<StageCounterProps> = ({stage}) => {
    return (
        <div className={styles.stageSquare}>
            <Link to="/" className={styles.stageText}>
                {stage}
            </Link>
        </div>
    );
};
