import React from 'react';

import styles from './MenuItem.module.css';

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
        if (this.props.subItems) {
            subMenu = this.getSubMenu();
        }
        return (
            <li className={styles.MenuItem}>
                <a href = "#">{this.props.text}</a>
                {subMenu}
            </li>
        );
    }
};

export default MenuItem;