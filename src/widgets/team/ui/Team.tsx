import styles from './Team.module.scss';
import {FC} from 'react';

interface TeamProps {
    name: string;
    score: number;
}

export const Team: FC<TeamProps> = ({name, score}) => {
    return (
        <div className={styles.team}>
            <div className={styles.name}>{name}</div>
            <div className={styles.balance}>Balance: {score}</div>
        </div>
    );
};
