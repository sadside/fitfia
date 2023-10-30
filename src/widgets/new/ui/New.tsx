import styles from './New.module.scss';
import {FC} from 'react';
import {Link} from 'react-router-dom';

interface NewProps {
    header: string;
    main: string;
    id: number;
}

export const New: FC<NewProps> = ({header, id}) => {
    return (
        <div className={styles.new}>
            <Link to={`/news/${id}`} className={styles.header}>
                {header}
            </Link>
        </div>
    );
};
