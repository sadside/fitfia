import styles from './News.module.scss';
import {New} from 'src/widgets/new';

export const NewsPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.newHolder}>
                <New header="hello" main="lorem" />
                <New header="hello" main="lorem" />
                <New header="hello" main="lorem" />
                <New header="hello" main="lorem" />
            </div>
        </div>
    );
};
