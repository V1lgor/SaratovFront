import React from 'react';

import styles from './Header.module.css';

let Header = () => {
    return (
        <header>
            <ul className = {styles.Menu}>
                <li className={styles.MenuItem}>1</li>
                <li className={styles.MenuItem}>2</li>
                <li className={styles.MenuItem}>3</li>
                <li className={styles.MenuItem}>4</li>
                <li className={styles.MenuItem}>5</li>
            </ul>
        </header>
    );
};

export default Header;