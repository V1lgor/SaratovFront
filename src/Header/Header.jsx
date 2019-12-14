import React from 'react';

import styles from './Header.module.css';
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import SearchField from "../SearchField/SearchField";

let Header = () => {
    return (
        <header className={styles.Header}>
            <Logo/>
            <SearchField placeholder = "Поиск по сайту"/>
            <Menu/>
        </header>
    );
};

export default Header;