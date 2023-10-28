import styles from './Team.module.scss'

export const Team = () => {
    return (
        <div className={styles.team}>
            <table>
                <tr>
                    <td>
                        <div className={styles.name}>aaaaaaaaaaaaaaaaaaaaa</div>  
                    </td>
                    <td>
                        <div className={styles.balance}>Balance: 300</div>
                    </td>
                </tr>
            </table>
        </div>
    );
};
