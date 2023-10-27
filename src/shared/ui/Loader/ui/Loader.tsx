import styles from './Loader.module.scss';
import {FC} from 'react';
// @ts-ignore
import {ReactComponent as Load} from 'src/shared/assets/svg/loader_svg.svg';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({}) => {
    return <div className={styles.wrapper}>loading</div>;
};
