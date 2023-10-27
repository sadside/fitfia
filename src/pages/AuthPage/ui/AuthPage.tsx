import {FC} from "react";
import styles from './AuthPage.module.scss'
import {Link} from "react-router-dom";

interface AboutPageProps {
    className?: string,
}

export const AuthPage: FC<AboutPageProps> = () => {
        return (
            <>
                <div className={styles.authHeader}>
                    <div className={styles.authLine}></div>
                    <div className={styles.authtextContainer}>
                        <p className={`${styles.authText} ${styles.regText}`}>
                            BAC ПРИВУЕСТВУЕТ УМНЫЙ<br></br> ПОМОЩНИК
                            <span className={styles.light}> ВИТАЛИЙ!</span><br/>
                            ВЫ ГОТОВЫ УМЕРЕТЬ?<br/>
                        </p>
                    </div>
                </div>

                <div className={styles.authFullLogin}>
                    <div className={styles.authLoginPassword}>
                        <div className={styles.authLogin}>
                            <p className={`${styles.authRegText} ${styles.regText}`}>LOGIN</p>
                            <input className={styles.authLoginSquare} />
                        </div>
                        <div className={styles.authPassword}>
                            <p className={`${styles.authRegText} ${styles.regText}`}>PASSWORD</p>
                            <input className={styles.authLoginSquare} />
                        </div>
                    </div>
                    <button className={styles.authLoginButton}>
                        <Link to="/tasks">.|.</Link>
                    </button>
                </div>
            </>
        );

};
