import React from 'react';

import styles from './MenuItem.module.css';
import {NavLink} from "react-router-dom";

class MenuItem extends React.Component {
    // this.props - свойства, которые приходят в компоненту при её вызове

    getSubItems() {
        return this.props.subItems.map(item => <MenuItem text = {item}/>);
    }

    getSubMenu() {
        return (
            <ul className={styles.SubMenu}>{this.getSubItems()}</ul>
        )
    }

    render() {
        let subMenu;
        let href = "#";
        if (this.props.subItems) {
            subMenu = this.getSubMenu();
        }
        if (this.props.href) {
            href = this.props.href;
        }
        return (
            <li className={styles.MenuItem}>
                <NavLink to = {href}>{this.props.text}</NavLink>
                {subMenu}
            </li>
        );
    }
};

export default MenuItem;