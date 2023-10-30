import styles from './CreateTeamPage.module.scss';
import {PotentialTeammate} from 'src/widgets/potentialTeammate';

// type FormValues = {
//     email: string;
// };

export const CreateTeamPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cuntFull}>
                <div className={styles.cunt}>
                    <input
                        className={styles.email}
                        placeholder="email участника"></input>
                    <button className={styles.send} type="submit">
                        пригласить в команду
                    </button>
                </div>

                <div className={styles.header}>Елена, 400 метров от Вас</div>
                <div className={styles.milfs}>
                    <div className={styles.main}>
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                        <PotentialTeammate />
                    </div>
                </div>
            </div>
        </div>
    );
};
