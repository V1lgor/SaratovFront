import React from 'react';

import styles from './Logo.module.css';
import {Link} from "react-router-dom";

class Logo extends React.Component {

    render() {
        return (
            <Link to="/map" className = {styles.LogoContainer}>
                <img src={require("../../img/logo.png")} alt="" className={styles.Logo}/>
            </Link>

        );
    }
};

export default Logo;