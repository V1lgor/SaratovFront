import React from 'react';

import styles from './SearchField.module.css';

class SearchField extends React.Component {

    render() {
        return (
            <div className={styles.SearchField}>
                <input type="text" placeholder={"Поиск по сайту"}/>
            </div>
        );
    }
};

export default SearchField;