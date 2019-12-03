import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './ReportType.module.css';
import PieceOfNews from "../../Events/PieceOfNews/PieceOfNews";

class ReportType extends React.Component {

    constructor(props) {
        super(props);

        let visibleMenu = false;

        // Выделяем отдельно объект под список типов проблем
        this.state = {
            problemTypes: []
        };

        this.typeInput = React.createRef();

        this.handleSubmitForward  = this.handleSubmitForward.bind(this);
        this.handleSubmitBackward = this.handleSubmitBackward.bind(this);
    }

    componentDidMount() {
        /*Запрашиваем /getallcomplaintcategories*/
        let problemTypes = [ {title: "Дворовая территория"},
                             {title: "Коммунальные проблемы"},
                             {title: "Разбитая дорога"} ];

        /*Запрашиваем автоматическое определение /detectcomplaintcategory*/
        let exactProblemType = [{title: "Дворовая территория"}]

        this.setState({problemTypes})
    }

    problemTypesToList() {
        return (
            <select>
                {this.state.problemTypes.map(problemType => <option>{this.props.title}</option>)}
            </select>
        );
    }

    handleSubmitForward(problemType) {

        let reportType = {
            type: this.typeInput.current.value
        };

        this.props.updateReportDraft(reportType, "reportType"); // this.setState(reportDraft)
    }

    handleSubmitBackward(problemType) {

        this.props.updateReportDraft({}, "reportType"); // this.setState(reportDraft)
    }

    render() {
        /*console.log("ReportTheme state:");
        console.log(this.state);*/
        console.log(this.state);
        return (
            <form className={styles.formDesign}>
                <p>Мы автоматически определили тип вашей проблемы, если вы не согласны, нажмите "изменить"</p>

                <label htmlFor="type">Тип проблемы:</label>
                <input readOnly ref = {this.typeInput} value={this.state.problemTypes[0].title} type = "text" id = "type"/>
                /*value = {this.state.problemTypes[0].title} не сработало*/
                /*Выдает странную ошибку Cannot read property 'title' of undefined*/

                <p >Изменить</p>

                {this.problemTypesToList()}

                <NavLink to = "theme"        onClick = {this.handleSubmitBackward()}>Назад</NavLink>
                <NavLink to = "danger-level" onClick = {this.handleSubmitForward()}> Далее</NavLink>
            </form>
        );
    }
};

export default ReportType;