import styles from './Sidebar.module.scss';
import {NavLink} from 'react-router-dom';
// @ts-ignore
import useSound from 'use-sound';
import menuSound from 'src/shared/assets/sounds/menu.mp3';
import {useState} from 'react';
import {Timer} from 'src/shared/ui/Timer';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({}: SidebarProps) => {
    const [play] = useSound(menuSound);
    const pathName = window.location.pathname;

    const [active, setActive] = useState(
        window.location.pathname.replace('/', '')
    );

    console.log(pathName);

    return (
        <ul className={styles.optionList}>
            <li
                className={`${styles.optionListItem} ${
                    active === '' && `${styles.active}`
                }`}
                onClick={() => setActive('')}>
                <NavLink to="/" onMouseEnter={play}>
                    <a>Задания</a>
                </NavLink>
            </li>
            <li
                className={`${styles.optionListItem} ${
                    active === 'news' && `${styles.active}`
                }`}
                onClick={() => setActive('news')}>
                <NavLink to="/news" onMouseEnter={play}>
                    <a>Новости</a>
                </NavLink>
            </li>
            <li
                className={`${styles.optionListItem} ${
                    active === 'profile' && `${styles.active}`
                }`}
                onClick={() => setActive('profile')}>
                <NavLink to="/profile" onMouseEnter={play}>
                    <a>Профиль</a>
                </NavLink>
            </li>
            <Timer date={''} />
        </ul>
    );
};
