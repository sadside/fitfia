import styles from './Timer.module.scss';

interface TimerProps {
    className?: string;
    date: string;
}

export const Timer = ({}: TimerProps) => {
    const days = (Date.parse('11-10-2023') - Date.now()) / 86400000;
    const hours = days - Math.floor(days);

    console.log(days);
    console.log(hours / 36);

    return <div className={styles.wrapper}></div>;
};
