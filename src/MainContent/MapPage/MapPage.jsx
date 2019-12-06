import React from 'react';

import styles from './MapPage.module.css'
import MainTopNav from "./MainTopNav/MainTopNav";

class MapPage extends React.Component
{
    render() {
        return (
            <section className={styles.MapPage}>
                <MainTopNav/>
                <img src={require("../../img/map.png")} alt="" className={styles.Map}/>
            </section>
        )
    }
};

export default MapPage;