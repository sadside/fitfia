import styles from './CreateTeamPage.module.scss';
import {PotentialTeammate} from 'src/widgets/potentialTeammate';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {ChangeEvent, useEffect, useState} from 'react';
import {
    getInvitationsThunk,
    inviteUserThunk,
} from 'src/entities/Team/teamThunks.ts';

// type FormValues = {
//     email: string;
// };

export const CreateTeamPage = () => {
    const dispatch = useAppDispatch();

    const invitations = useAppSelector(state => state.team.invitations);
    const show = useAppSelector(state => state.team.show);
    const [email, setEmail] = useState('');

    useEffect(() => {
        dispatch(getInvitationsThunk());
    }, []);

    const handleSubmit = () => {
        dispatch(inviteUserThunk(email));
    };
    if (!show)
        return (
            <div>Вы в команде, информация о команде находится в профиле</div>
        );

    return (
        <div className={styles.wrapper}>
            <div className={styles.cuntFull}>
                <div className={styles.cunt}>
                    <input
                        className={styles.email}
                        placeholder="email участника"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }></input>
                    <button
                        className={styles.send}
                        type="submit"
                        onClick={handleSubmit}>
                        пригласить в команду
                    </button>
                </div>

                <div className={styles.header}>Елена, 400 метров от Вас</div>
                <div className={styles.milfs}>
                    <div className={styles.main}>
                        {invitations.invitationsToMe.length ? (
                            invitations.invitationsToMe.map(invite => {
                                return (
                                    <PotentialTeammate
                                        id={invite.id}
                                        status={invite.status}
                                        userFrom={invite.userFrom}
                                        userTo={invite.userTo}
                                    />
                                );
                            })
                        ) : (
                            <div>Приглашений нет</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
