import React from 'react';

import styles from './FooterMenu.module.css';
import MenuItem from "../../Header/Menu/MenuItem/MenuItem";

class FooterMenu extends React.Component {
    render() {
        return (
            <ul className={styles.FooterMenu}>
                <MenuItem href = "/faq" text = "FAQ"/>
                <MenuItem text = "Обратная связь"/>
                <MenuItem text = "Контакты"/>
                <MenuItem href = "/about" text = "О нас"/>
            </ul>
        );
    }
};

export default FooterMenu;