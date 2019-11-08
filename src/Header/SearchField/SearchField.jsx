import React from 'react';

import styles from './SearchField.module.css';

class SearchField extends React.Component {

    render() {
        return (
            <span>
                <input type="text" placeholder={"Поиск по сайту"} className={styles.SearchField}/>
            </span>
        );
    }
};

export default SearchField;