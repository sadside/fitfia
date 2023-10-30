import styles from './ProfilePage.module.scss';
import {FC, useEffect} from 'react';
import {Achivment} from 'src/widgets/achivment/ui/Achivment.tsx';
import {Team} from 'src/widgets/team/ui/Team.tsx';
import {CurrentTeam} from 'src/widgets/currentTeam/ui/currentTeam.tsx';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {getUsersRatingThunks} from 'src/entities/Rating/ratingThunks.ts';
import {Loader} from 'src/shared/ui/Loader';
import {getTeamInfoThunk} from 'src/entities/Team/teamThunks.ts';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage: FC<ProfilePageProps> = () => {
    const team = useAppSelector(state => state.team.teamInfo);
    const rating = useAppSelector(state => state.rating.rating);

    const achievements = useAppSelector(
        state => state?.user?.user?.content.achievements
    );

    const email = useAppSelector(
        state => state?.user?.user?.content.userName.email
    );

    const status = useAppSelector(state => state.rating.status);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsersRatingThunks());
        dispatch(getTeamInfoThunk());
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.profileSquares}>
                <div className={styles.leftColumn}>
                    <div className={styles.teamHolder}>
                        {team?.team_name ? (
                            <CurrentTeam
                                name={team.team_name}
                                balance={0}
                                copilot={
                                    team.members.filter(
                                        item => item.email !== email
                                    )[0].email
                                }
                            />
                        ) : (
                            <div className={styles.enough}>
                                Ты не в команде, создай (пригласи сам) или жди
                                приглашения! Твои приглашения ниже
                            </div>
                        )}
                    </div>
                    <div className={styles.header1}>
                        <p className={styles.text}>Achivments</p>
                    </div>
                    <div className={styles.achivmentHolder}>
                        <div className={styles.achScroll}>
                            {achievements?.length ? (
                                achievements.map(item => {
                                    return (
                                        <Achivment
                                            key={item.title}
                                            description={item.description}
                                            image={item.image}
                                            title={item.title}
                                        />
                                    );
                                })
                            ) : (
                                <div className={styles.notAch}>
                                    Нет достижений
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.header1}>
                        <p className={styles.text}>Rating</p>
                    </div>
                    <div className={styles.rateHolder}>
                        <div className={styles.rateScroll}>
                            {status === 'idle' &&
                                rating.map(user => {
                                    return (
                                        <Team
                                            name={user.name}
                                            score={user.score}
                                        />
                                    );
                                })}
                            {status === 'loading rating' && (
                                <Loader width={50} height={50} />
                            )}
                        </div>
                    </div>
                    <div className={styles.memeHolder}>
                        <div className={styles.header1}>
                            <p className={styles.text}>
                                Поругать или похвалить разрабов
                            </p>
                        </div>
                        <div className={styles.border}></div>
                        <p className={styles.contacts}>
                            <div className={styles.contact}>
                                Backend:{' '}
                                <a
                                    href="https://t.me/a_a_surkova"
                                    target="_blank">
                                    Anastasya Surkova
                                </a>
                            </div>
                            <div className={styles.contact}>
                                Design and HTML & CSS:{' '}
                                <a
                                    href="https://t.me/aloha_kuino"
                                    target="_blank">
                                    Alexandr Shushakov
                                </a>
                            </div>
                            <div className={styles.contact}>
                                Frontend:{' '}
                                <a href="https://t.me/khvadimd" target="_blank">
                                    Vadim Khalikov
                                </a>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
