import styles from './Achivment.module.scss';
import {FC} from 'react';
import {Achievement} from 'src/entities/User/userModel.ts';

export const Achivment: FC<Achievement> = ({title, image}) => {
    return (
        <div className={styles.achivment}>
            <table>
                <tr>
                    <td>
                        <p className={styles.header}>{title}</p>
                    </td>
                    {image && (
                        <td>
                            <div className={styles.icon}>
                                <image></image>
                            </div>
                        </td>
                    )}
                </tr>
            </table>
        </div>
    );
};
