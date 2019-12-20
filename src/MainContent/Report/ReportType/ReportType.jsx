import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './ReportType.module.css';

class ReportType extends React.Component {

    constructor(props) {
        super(props);


        // Выделяем отдельно объект под список типов проблем
        this.state = {
            isSelectVisible: false,
            problemCategoryList: [{category: ""}],
            selectedCategory: ""
        };

        this.typeInput = React.createRef();
        this.categoryChangeCheckboxRef = React.createRef();
        this.categorySelect = React.createRef();

        this.handleSubmitForward  = this.handleSubmitForward.bind(this);
        this.handleSubmitBackward = this.handleSubmitBackward.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount() {
        fetch('https://test.project-saratov.ml/api/v1/complaint/getallcomplaintcategories')
            .then(result => result.json())
            .then(data => {
                //let problemCategoryList = data;
                let problemCategoryList = [{category: "Dick"}, {category: "Pizda"}];
                let selectedCategory = problemCategoryList[0];
                this.setState({problemCategoryList, selectedCategory});
            });
    }

    problemCategoryListToSelect() {
        return (
            <select className={styles.CategoryList} onChange = {this.handleSelectChange} ref = {this.categorySelect}>
                {this.state.problemCategoryList.map(problemCategoryList => <option>{problemCategoryList.category}</option>)}
            </select>
        );
    }

    handleSelectChange() {
        let selectedCategory = this.categorySelect.current.options[this.categorySelect.current.selectedIndex];
        this.setState({selectedCategory});
    }

    handleSubmitForward(problemType) {

        let reportType = {
            type: this.typeInput.current.value
        };

        this.props.updateReportDraft(reportType, "reportType"); // this.setState(reportDraft)
    }

    handleSubmitBackward(problemType) {
        let reportType = {
            type: this.typeInput.current.value
        };
        this.props.updateReportDraft(reportType, "reportType"); // this.setState(reportDraft)
    }

    handleCheckboxChange() {
        let isSelectVisible =  this.categoryChangeCheckboxRef.current.checked;
        this.setState({isSelectVisible});
    }

    render() {

        return (
            <form className={styles.ReportType}>
                <h2>Тип проблемы</h2>
                <p className={styles.Description}>Мы автоматически определили тип Вашей проблемы. Если Вы считаете, что выбор сделан неправильно, нажмите кнопку "Изменить".</p>

                <label htmlFor="type">Тип проблемы:</label>
                <input readOnly ref = {this.typeInput} value={this.state.selectedCategory.category} type = "text" id = "type" className={styles.TypeInput}/>

                <label htmlFor={"changeCheckbox"}>Изменить</label>
                <input type="checkbox"  ref = { this.categoryChangeCheckboxRef} className={styles.ChangeCheckbox} onChange={this.handleCheckboxChange}/>

                {this.state.isSelectVisible ? this.problemCategoryListToSelect() : null}

                <NavLink to = "theme"        onClick = {this.handleSubmitBackward}>Назад</NavLink>
                <NavLink to = "danger-level" onClick = {this.handleSubmitForward}> Далее</NavLink>
            </form>
        );
    }
}

export default ReportType;