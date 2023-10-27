import styles from './LoginPage.module.scss';
import {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {loginThunk} from 'src/entities/User/userThunks.ts';

interface RegisterPageProps {
    className?: string;
}

export type FormValues = {
    email: string;
    password: string;
};

export const LoginPage: FC<RegisterPageProps> = ({}) => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<FormValues>({
        mode: 'onBlur',
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAppSelector(state => state.user.isAuth);

    if (isAuth) {
        navigate('/');
    }

    const onSubmit: SubmitHandler<FormValues> = data => {
        dispatch(loginThunk(data));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.authHeader}>
                <div className={styles.authLine}></div>
                <div className={styles.authtextContainer}>
                    <p className={`${styles.authText} ${styles.regText}`}>
                        BAC ПРИВУЕСТВУЕТ УМНЫЙ<br></br> ПОМОЩНИК
                        <span className={styles.light}> ВИТАЛИЙ!</span>
                        <br />
                        ВЫ УЖЕ МЕРТВЫ!
                        <br />
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.authFullLogin}>
                    <div className={styles.authLoginPassword}>
                        <div className={styles.authLogin}>
                            <p
                                className={`${styles.authRegText} ${styles.regText}`}>
                                email
                            </p>
                            <input
                                className={styles.authLoginSquare}
                                {...register('email', {
                                    required: 'Почту забыл... ',
                                    // pattern: {
                                    //     value: /[a-zA-Z][^\s]*@g\.nsu\.ru/,
                                    //     message: 'Укажи почту от аккаунта НГУ',
                                    // },
                                })}
                            />
                            {errors?.email && (
                                <div className={styles.authError}>
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                        <div className={styles.authPassword}>
                            <p
                                className={`${styles.authRegText} ${styles.regText}`}>
                                password
                            </p>
                            <input
                                className={styles.authLoginSquare}
                                type="password"
                                {...register('password', {
                                    required:
                                        '...Пароль мне самому придумывать?...',
                                    minLength: {
                                        value: 8,
                                        message:
                                            '...Слишком короткий...) пароль)',
                                    },
                                })}
                            />
                            {errors?.password && (
                                <div className={styles.authError}>
                                    {errors.password.message}
                                </div>
                            )}
                        </div>
                        <button className={styles.authLoginButton}>
                            Войти
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
