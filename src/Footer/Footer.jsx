import React from 'react'

import styles from './Footer.module.css'
import Menu from "../Header/Menu/Menu";
import FooterMenu from "./FooterMenu/FooterMenu";

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.Footer}>
                <FooterMenu/>
            </footer>
        )
    }
};

export default Footer;