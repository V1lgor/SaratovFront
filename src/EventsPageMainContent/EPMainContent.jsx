import React from 'react';
import styles from './EPMainContent.module.css';
import TopSearch from "./TopSearch/TopSearch";

class EPMainContent extends React.Component {


    render() {
        return (
            <main className={styles.EPMainContent}>
                <TopSearch/>

            </main>
        );
    }
};

export default EPMainContent;