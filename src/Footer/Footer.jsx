import React from 'react'

import styles from './Footer.module.css'
import Menu from "../Header/Menu/Menu";
import FooterMenu from "./FooterMenu/FooterMenu";
import Social from "./Social/Social";
import FooterLogo from "./FooterLogo/FooterLogo";

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.Footer}>
                <FooterLogo/>
                <Social/>
                <FooterMenu/>
            </footer>
        )
    }
};

export default Footer;