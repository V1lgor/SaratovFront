import React from 'react';

import styles from './SearchField.module.css';

class SearchField extends React.Component {

    constructor(props) {
        super(props);

        this.SearchField = React.createRef();
        this.SearchInput = React.createRef();

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);

        this.state = {
            searchText: ""
        };

    }

    handleSearchInputChange() {
        let searchText = this.SearchInput.current.value;

        if (!searchText) {
            console.log("Empty");
            this.SearchField.current.style.className = styles.SearchField;
            this.SearchField.current.style.display = "hidden";
        }
        else
            this.SearchField.current.style.className = styles.SearchField + " " + styles.IsEmpty;

        this.setState({searchText});
    }

    render() {

        let inputClassName = this.state.searchText ? styles.SearchField : styles.SearchField + " " + styles.IsEmpty;

        return (
            <div className={inputClassName} ref={this.SearchField}>
                <input type="text" placeholder={this.props.placeholder} ref={this.SearchInput}
                       onChange={this.handleSearchInputChange} value={this.state.searchText}/>
            </div>
        );
    }
};

export default SearchField;