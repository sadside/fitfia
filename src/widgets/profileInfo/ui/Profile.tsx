import styles from './Profile.module.scss';
import {useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {User} from 'src/entities/User/userModel.ts';
import {Link} from 'react-router-dom';
import avatar from 'src/shared/assets/images/ava.jpeg';

interface ProfileProps {
    className?: string;
}

export const Profile = ({}: ProfileProps) => {
    const user = useAppSelector(state => state.user.user) as User;
    const team = useAppSelector(state => state.team?.teamInfo);

    return (
        <div className={styles.profileInfo}>
            <div className={styles.fullProfile}>
                <div className={styles.ava}>
                    <img src={avatar} height={141} width={141} />
                </div>
                <div className={styles.withoutDickPick}>
                    <div
                        className={`${styles.nicknameAndLevel} ${styles.profileItem}`}>
                        <div className={styles.nick}>
                            {user.content.userName.username}
                        </div>
                        <div className={`${styles.level} ${styles.regText}`}>
                            your iq: {Math.ceil(Math.random() * 40)}
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div
                        className={`${styles.fullBalance} ${styles.profileItem}`}>
                        <div className={styles.balance}>BALANCE</div>
                        <div
                            className={`${styles.currentBalance} ${styles.regText}`}>
                            {user?.content.points ? user?.content.points : 0}
                        </div>
                    </div>
                    {/* <div className={styles.line}></div>
                    <div className={`${styles.fullTeam} ${styles.profileItem}`}>
                        <div className={styles.team}>TEAM</div>
                        <div
                            className={`${styles.currentTeam} ${styles.regText}`}>
                            {team?.team_name ? (
                                team.team_name
                            ) : (
                                <Link
                                    to="/create-team"
                                    className={`${styles.currentTeam} ${styles.regText}`}>
                                    Create team
                                </Link>
                            )}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};