import React from 'react';
import styles from './TopSearch.module.css';


class TopSearch extends React.Component {
    render() {
        return (
            <div className={styles.TopSearch}>
                <h1>События</h1>
                <input type="text" placeholder={"Я ищу..."}/>
            </div>

        );
    }
};

export default TopSearch;