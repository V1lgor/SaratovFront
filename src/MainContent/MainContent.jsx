import React from 'react';
import styles from './MainContent.module.css';
import MainTopNav from "./MainTopNav/MainTopNav";


class MainContent extends React.Component {


    render() {
        return (
            <main className={styles.MainContent}>
                <MainTopNav/>
                <img src={require("../img/map.png")} alt="" className={styles.Map}/>

            </main>
        );
    }
};

export default MainContent;