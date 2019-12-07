import React from 'react';

import styles from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";

class Menu extends React.Component {
    render() {
        return (
          <ul className={styles.Menu}>
              <MenuItem href = "/map" text = "Карта"/>
              <MenuItem href = "/news" text = "Новости"/>
              <MenuItem href = "/send-report/" text = "Сообщить о проблеме"/>
              <MenuItem href = "/contacts" text = "Контакты"/>
              <MenuItem href = "/sign-in" text = "Войти" subItems = {["Гражданин", "Исполнитель", "Руководитель"]}/>
          </ul>
        );
    }
};

export default Menu;