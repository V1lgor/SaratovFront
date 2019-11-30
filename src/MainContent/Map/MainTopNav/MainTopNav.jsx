import React from 'react'

import styles from './MainTopNav.module.css'
import {NavLink} from "react-router-dom";
import {Route} from 'react-router-dom';
class MainTopNav extends React.Component {
    render () {
        return (
            <div className={styles.MainTopNav}>
                <NavLink to="/send-report/theme" className={styles.RedLink}>Сообщить о проблеме</NavLink>
                <NavLink to="/events">Узнать о событиях</NavLink>
            </div>
        )
    }
};

export default MainTopNav;