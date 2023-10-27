import styles from './Profile.module.scss'

interface ProfileProps {
    className?: string,
}

export const Profile = ({}: ProfileProps) => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.fullProfile}>
                <div className={styles.ava}></div>
                <div className={styles.withoutDickPick}>
                    <div className={`${styles.nicknameAndLevel} ${styles.profileItem}`}>
                        <div className={styles.nick}>Bedolaga</div>
                        <div className={`${styles.level} ${styles.regText}`}>level govna</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={`${styles.fullBalance} ${styles.profileItem}`}>
                        <div className={styles.balance}>BALANCE</div>
                        <div className={`${styles.currentBalance} ${styles.regText}`}>BALANCE</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={`${styles.fullTeam} ${styles.profileItem}`}>
                        <div className={styles.team}>TEAM</div>
                        <div className={`${styles.currentTeam} ${styles.regText}`}>HUIM</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
