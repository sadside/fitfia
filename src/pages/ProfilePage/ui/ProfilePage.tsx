import styles from './ProfilePage.module.scss';
import {FC} from 'react';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage: FC<ProfilePageProps> = () => {
    return (
        <>
            {/*<Profile />*/}
            {/*<Navbar />*/}
            <div className={`${styles.achivmentHolder} ${styles.squre}`}>
                <div className={styles.achivmentHeader}>
                    YOUR ACHIVMENTS?
                    <br />
                    IS IT ALL?
                </div>
                <div className={styles.achivmentLine}></div>
                <div className={styles.achivmentList}>{/*<Achivment />*/}</div>
            </div>
        </>
    );
};
