import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './ReportType.module.css';
import PieceOfNews from "../../Events/PieceOfNews/PieceOfNews";

class ReportType extends React.Component {

    constructor(props) {
        super(props);


        // Выделяем отдельно объект под список типов проблем
        this.state = {
            isSelectVisible: false,
            problemCategoryList: [{category: ""}]
        };

        this.typeInput = React.createRef();
        this.categoryChangeCheckboxRef = React.createRef();

        this.handleSubmitForward  = this.handleSubmitForward.bind(this);
        this.handleSubmitBackward = this.handleSubmitBackward.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    componentDidMount() {
        fetch('https://test.project-saratov.ml/api/v1/complaint/getallcomplaintcategories')
            .then(result => result.json())
            .then(data => {
                let problemCategoryList = data;
                this.setState({problemCategoryList});
            });
    }

    problemCategoryListToSelect() {
        return (
            <select className={styles.CategoryList}>
                {this.state.problemCategoryList.map(problemCategoryList => <option>{problemCategoryList.category}</option>)}
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

    handleCheckboxChange() {
        let isSelectVisible =  this.categoryChangeCheckboxRef.current.checked;
        this.setState({isSelectVisible});
    }

    render() {
        return (
            <form className={styles.formDesign}>
                <p>Мы автоматически определили тип вашей проблемы, если вы не согласны, нажмите "изменить"</p>

                <label htmlFor="type">Тип проблемы:</label>
                <input readOnly ref = {this.typeInput} value={this.state.problemCategoryList[0].category} type = "text" id = "type"/>

                <label htmlFor={"changeCheckbox"}>Изменить</label>
                <input type="checkbox"  ref = { this.categoryChangeCheckboxRef} className={styles.ChangeCheckbox} onChange={this.handleCheckboxChange}/>

                {this.state.isSelectVisible ? this.problemCategoryListToSelect() : null}

                <NavLink to = "../theme"        onClick = {this.handleSubmitBackward}>Назад</NavLink>
                <NavLink to = "../danger-level" onClick = {this.handleSubmitForward}> Далее</NavLink>
            </form>
        );
    }
};

export default ReportType;