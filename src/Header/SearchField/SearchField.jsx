import React from 'react';

import styles from './SearchField.module.css';

class SearchField extends React.Component {

    render() {
        return (
            <span>
                <input type="text" placeholder={"Поиск"} className={styles.SearchField}/>
            </span>
        );
    }
};

export default SearchField;