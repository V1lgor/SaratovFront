import React from 'react';
import {NavLink} from "react-router-dom";

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
        console.log("ReportTheme state:");
        console.log(this.state);

        return (
            <form>
                <label htmlFor="theme">Тема:</label>
                <input ref = {this.themeInput} type="text" id = "theme" placeholder = "Тема"/>

                <label htmlFor="description">Описание:</label>
                <textarea ref = {this.descriptionInput} id = "description" placeholder = "Описание"/>

                <NavLink to = "report-type" onClick = {this.handleSubmit}>Далее</NavLink>
            </form>
        );
    }
};

export default ReportTheme;