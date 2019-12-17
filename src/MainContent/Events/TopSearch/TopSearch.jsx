import React from 'react';
import styles from './TopSearch.module.css';
import SearchField from "../../../SearchField/SearchField";

class TopSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            SearchField: []
        };
    }


    render() {
        return (
            <div className={styles.TopSearch}>
                <h1>События</h1>
                <SearchField placeholder = "Я ищу..."/>
            </div>

        );
    }
}

export default TopSearch;