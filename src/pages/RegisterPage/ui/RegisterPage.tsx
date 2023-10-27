import styles from './RegisterPage.module.scss';
import {FC} from 'react';
// import {getRandomWebUrl} from "src/shared/static/RegisterWord.ts";
import {SubmitHandler, useForm} from 'react-hook-form';
import {registration, setShowCodeInput} from 'src/entities/User/userSlice.ts';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {AnimatePresence, motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

interface RegisterPageProps {
    className?: string;
}

export type FormValues = {
    contact_link: string;
    name: string;
    email: string;
    password: string;
    token: string;
};

export const RegisterPage: FC<RegisterPageProps> = ({}) => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<FormValues>({
        mode: 'onBlur',
    });

    const dispatch = useAppDispatch();

    const show = useAppSelector(state => state.user.showCodeInput);

    const onSubmit: SubmitHandler<FormValues> = data => {
        dispatch(registration(data));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.authHeader}>
                <div className={styles.authLine}></div>
                <div className={styles.authtextContainer}>
                    <p className={`${styles.authText} ${styles.regText}`}>
                        BAC ПРИВУЕСТВУЕТ УМНЫЙ<br></br> ПОМОЩНИК
                        <span
                            className={styles.light}
                            onClick={() => {
                                dispatch(setShowCodeInput(!show));
                                toast('Код отправлен');
                            }}>
                            {' '}
                            ВИТАЛИЙ!
                        </span>
                        <br />
                        ВЫ ГОТОВЫ УМЕРЕТЬ?
                        <br />
                        {/*{getRandomWebUrl()}*/}
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.authFullLogin}>
                    <div className={styles.authLoginPassword}>
                        <div className={styles.authLogin}>
                            <p
                                className={`${styles.authRegText} ${styles.regText}`}>
                                messenger
                            </p>
                            <input
                                className={styles.authLoginSquare}
                                {...register('contact_link', {
                                    required: 'Цифры забыл указать',
                                })}
                            />
                            {errors?.contact_link && (
                                <div>{errors.contact_link.message}</div>
                            )}
                        </div>
                        <div className={styles.authLogin}>
                            <p
                                className={`${styles.authRegText} ${styles.regText}`}>
                                name
                            </p>
                            <input
                                className={styles.authLoginSquare}
                                {...register('name', {
                                    required: 'Обращаться-то как? ',
                                    pattern: {
                                        value: /[a-zA-Z_]+[^\s]*/,
                                        message: 'Введи корректное имя',
                                    },
                                })}
                            />
                            {errors?.name && <div>{errors.name.message}</div>}
                        </div>
                        <div className={styles.authLogin}>
                            <p
                                className={`${styles.authRegText} ${styles.regText}`}>
                                email
                            </p>
                            <input
                                className={styles.authLoginSquare}
                                {...register('email', {
                                    required: 'Почту забыл... ',
                                    pattern: {
                                        value: /[a-zA-Z][^\s]*@g\.nsu\.ru/,
                                        message: 'Укажи почту от аккаунта НГУ',
                                    },
                                })}
                            />
                            {errors?.email && <div>{errors.email.message}</div>}
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
                                    required: 'Пароль мне самому придумывать?',
                                    minLength: {
                                        value: 8,
                                        message: 'Слишком короткий...) пароль)',
                                    },
                                })}
                            />
                            {errors?.password && (
                                <div>{errors.password.message}</div>
                            )}
                        </div>
                        <AnimatePresence>
                            {show && (
                                <motion.div
                                    className={styles.authPassword}
                                    initial={{height: 0}}
                                    animate={{height: 'auto'}}
                                    exit={{height: 0}}>
                                    <p
                                        className={`${styles.authRegText} ${styles.regText}`}>
                                        Code
                                    </p>
                                    <input
                                        className={styles.authLoginSquare}
                                        type="text"
                                        {...register('token', {
                                            required: 'Кого обмануть решил?)',
                                        })}
                                    />
                                    {errors?.token && (
                                        <div>{errors.token.message}</div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Link to={'/login'}>Войти</Link>
                    </div>
                    <button type="submit" className={styles.authLoginButton}>
                        .|.
                    </button>
                </div>
            </form>
        </div>
    );
};
