import React from 'react'

import styles from './FooterLogo.module.css'

class FooterLogo extends React.Component {
    render() {
        return (
            <img src={require('../../img/logoFooter.png')} alt="" className={styles.FooterLogo}/>
        )
    }
};

export default FooterLogo;