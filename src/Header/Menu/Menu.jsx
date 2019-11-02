import React from 'react';

import styles from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";

class Menu extends React.Component {
    render() {
        return (
          <ul className={styles.Menu}>
              <MenuItem text = "Карта"/>
              <MenuItem text = "Новости"/>
              <MenuItem text = "Сообщить о проблеме"/>
              <MenuItem text = "Контакты"/>
              <MenuItem text = "Войти" subItems = {["Гражданин", "Исполнитель", "Руководитель"]}/>
          </ul>
        );
    }
};

export default Menu;