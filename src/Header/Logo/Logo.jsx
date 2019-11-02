import React from 'react';

import styles from './Logo.module.css';

class Logo extends React.Component {

    render() {
        return (
            <img src={require("../../img/logo.png")} alt="" className={styles.Logo}/>
        );
    }
};

export default Logo;