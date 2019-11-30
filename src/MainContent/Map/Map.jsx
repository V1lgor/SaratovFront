import React from 'react';
import MainTopNav from "./MainTopNav/MainTopNav";
import styles from "../MainContent.module.css";
import {Route} from "react-router-dom";

class Map extends React.Component {
    render() {
        return(
            <section>
                <MainTopNav/>
                <img src={require("../../img/map.png")} alt="" className={styles.Map}/>
            </section>
        );
    }
}

export default Map;