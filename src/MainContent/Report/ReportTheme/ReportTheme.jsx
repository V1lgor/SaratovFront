import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './ReportTheme.module.css';

class ReportTheme extends React.Component {

    constructor(props) {
        super(props);

        this.themeInput = React.createRef();
        this.descriptionInput = React.createRef();

        console.log(this.props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

        let theme =  this.themeInput.current.value;
        let description = this.descriptionInput.current.value;

        this.props.updateReportDraft(theme, "title");
        this.props.updateReportDraft(description, "description");
    }

    render() {
        return (
            <form className={styles.ReportTheme}>
                <h2 className={styles.FormTitle}>Опишите возникшую проблему</h2>
                <label htmlFor="theme">Тема проблемы:</label>
                <input ref = {this.themeInput} type="text" id = "theme" placeholder = "Введите тему"/>

                <label htmlFor="description">Введите описание:</label>
                <textarea ref = {this.descriptionInput} id = "description" placeholder = "Введите детальное описание"/>

                <NavLink to = "report-type" onClick = {this.handleSubmit} className={styles.Btn}>Далее</NavLink>
            </form>
        );
    }
};

export default ReportTheme;