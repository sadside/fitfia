import styles from './currentTeam.module.scss'
import {FC} from 'react';

interface CurrentTeamProps{
    name : string;
    balance : number;
    copilot : string;
}

export const CurrentTeam : FC<CurrentTeamProps> = ({name, balance, copilot}) => {
    return (
        <>
            <p className={styles.name}>Команда: {name}</p>
            <div className={styles.border}></div>
            <p className={styles.copilot}>Напарник: {copilot}</p>
            <p className={styles.balance}>Баланс: {balance}</p>
        </>
    );
};
