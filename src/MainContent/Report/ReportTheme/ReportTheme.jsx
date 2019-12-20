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

    handleSubmit(event) {

        let reportTheme = {
            theme: this.themeInput.current.value,
            description: this.descriptionInput.current.value
        };
        this.props.updateReportDraft(reportTheme, "reportTheme"); // this.setState(reportDraft)
    }

    render() {
        return (
            <form className={styles.ReportTheme}>
                <h1 className={styles.FormTitle}>Опишите возникшую проблему</h1>
                <label htmlFor="theme">Тема:</label>
                <input ref = {this.themeInput} type="text" id = "theme" placeholder = "Тема"/>

                <label htmlFor="description">Описание:</label>
                <textarea ref = {this.descriptionInput} id = "description" placeholder = "Описание"/>

                <NavLink to = "report-type" onClick = {this.handleSubmit} className={styles.Btn}>Далее</NavLink>
            </form>
        );
    }
};

export default ReportTheme;