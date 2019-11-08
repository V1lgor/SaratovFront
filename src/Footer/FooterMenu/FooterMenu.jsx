import React from 'react';

import styles from './FooterMenu.module.css';
import MenuItem from "../../Header/Menu/MenuItem/MenuItem";

class FooterMenu extends React.Component {
    render() {
        return (
            <ul className={styles.FooterMenu}>
                <MenuItem text = "FAQ"/>
                <MenuItem text = "Обратная связь"/>
                <MenuItem text = "Контакты"/>
                <MenuItem text = "О нас"/>
            </ul>
        );
    }
};

export default FooterMenu;