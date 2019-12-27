import React from 'react';
import {Link} from "react-router-dom";
import styles from './CheckData.module.css';
import Report from "../Report";
import ReportTheme from "../ReportTheme/ReportTheme";


class CheckData extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <form className={styles.CheckForm}>
            <h2 className={styles.FormTitle}>Проверьте введённые данные</h2>
            <p>Тема: </p> <p>{this.props.getTitle()}</p>
            <p>Описание: </p> <p>{this.props.getDescription()}</p>
            <p>Тип проблемы: </p> <p>{this.props.getCategory()}</p>
            <p>Уровень опасности: </p> <p>{this.props.getDangerLevel()}</p>
            <p>Анонимно: </p> <p>{this.props.getAnonymous()}</p>
            <p>Имя: </p> <p>{this.props.getName()}</p>
            <p>Email: </p> <p>{this.props.getEmail()}</p>
            <p>Телефон: </p> <p>{this.props.getPhone()}</p>
            <p>Публично: </p> <p id>{this.props.getVisibility()}</p>
            <p>Дата: </p> <p>{this.props.getComplaintTimestamp()}</p>
            <p>Адрес: </p> <p>Хуй пизда залупа азазаз</p>

            <Link to="danger-level" onClick={this.handleSubmit}
                  className={styles.Btn + ' ' + styles.Backward}>Назад</Link>
            <Link to="check-data" onClick={this.handleSubmit}
                  className={styles.Btn + ' ' + styles.Forward}>Далее</Link>

        </form>

    }
}

export default CheckData;
