import styles from './New.module.scss'
import {FC} from 'react';

interface NewProps{
    header : string;
    main : string;
}

export const New : FC<NewProps> = ({header, main}) => {
    return (
        <div className={styles.new}>
            <div className={styles.header}>{header}</div>
            <p>{main}</p>
        </div>
    );
};