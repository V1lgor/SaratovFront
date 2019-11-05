import React from 'react';
import SideMenu from "./SideMenu/SideMenu";
import styles from './MainContent.module.css';
import MainTopNav from "./MainTopNav/MainTopNav";

let MainContent = () => {
    return (
        <main className={styles.MainContent}>
            <MainTopNav/>
            <img src={require("../img/map.png")} alt="" className={styles.Map}/>
        </main>
    );
};

export default MainContent;