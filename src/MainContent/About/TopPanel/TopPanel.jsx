import React from 'react';
import styles from './TopPanel.module.css';
import SearchField from "../../../SearchField/SearchField";

class TopPanel extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={styles.TopPanel}>
                <h1>О нас</h1>

            </div>

        );
    }
}

export default TopPanel;