import React from 'react'

import styles from './MainTopNav.module.css'

class MainTopNav extends React.Component {
    render () {
        return (
            <div className={styles.MainTopNav}>
                <a href="#" className={styles.RedLink}>Сообщить о проблеме</a>
                <a href="/events">Узнать о событиях</a>
            </div>
        )
    }
};

export default MainTopNav;