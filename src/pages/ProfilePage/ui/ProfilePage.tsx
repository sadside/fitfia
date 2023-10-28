import styles from './ProfilePage.module.scss';
import {FC} from 'react';
import {Achivment} from 'src/widgets/achivment/ui/Achivment.tsx';
import {Team} from 'src/widgets/team/ui/Team.tsx';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage: FC<ProfilePageProps> = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.profileSquares}>
                <div className={styles.leftColumn}>
                    <div className={styles.teamHolder}>
                        <div className={styles.header}>team</div>
                        <div className={styles.border}></div>
                    </div>
                    <div className={styles.achivmentHolder}>
                        <div className={styles.header}>achivment</div>
                        <div className={styles.border}></div>
                        <div className={styles.achScroll}>
                            <Achivment />
                            <Achivment />
                            <Achivment />
                            <Achivment />
                            <Achivment />
                            <Achivment />
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.rateHolder}>
                        <div className={styles.header}>rating</div>
                        <div className={styles.border}></div>
                        <div className={styles.rateScroll}>
                            <Team />
                            <Team />
                            <Team />
                            <Team />
                            <Team />
                            <Team />
                        </div>
                    </div>
                    <div className={styles.memeHolder}>
                        <div className={styles.header}>meme</div>
                        <div className={styles.border}></div>
                        <p className={styles.contacts}>
                            some contacts(probably mine)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
