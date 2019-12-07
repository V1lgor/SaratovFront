import React from 'react';
import styles from './TopSearch.module.css';


class TopSearch extends React.Component {
    render() {
        return (
            <div className={styles.TopSearch}>
                <h1>События</h1>
                <div className={styles.SearchField}>
                    <input type="text" placeholder={"Я ищу..."}/>
                </div>
            </div>

        );
    }
};

export default TopSearch;