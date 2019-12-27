import React from 'react';
import {Link} from "react-router-dom";
import styles from './CheckData.module.css';

class CheckData extends React.Component {
    constructor(props) {
        super(props);

        this.getAnon = this.getAnon.bind(this);
        this.getVisibility = this.getVisibility.bind(this);
    }

    getAnon() {
        if (this.props.getAnonymous()) {
            return "Анонимно";
        } else {
            return "Не анонимно";
        }
    }

    getVisibility() {
        if (this.props.getVisibility()) {
            return "Видно всем";
        } else {
            return "Никто не увидит";
        }

    }

    render() {

        return (
            <form className={styles.CheckForm}>
                <h2 className={styles.FormTitle}>Проверьте введённые данные</h2>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Тема:</p>
                    <p className={styles.DataValue}>{this.props.getTitle()}</p>
                </div>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Описание:</p>
                    <p className={styles.DataValue}>{this.props.getDescription()}</p>
                </div>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Тип проблемы:</p>
                    <p className={styles.DataValue}>{this.props.getCategory()}</p>
                </div>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Анонимно:</p>
                    <p className={styles.DataValue}>{this.getAnon()}</p>
                </div>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Email:</p>
                    <p className={styles.DataValue}>{this.props.getEmail()}</p>
                </div>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Телефон:</p>
                    <p className={styles.DataValue}>{this.props.getPhone()}</p>
                </div>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Публично:</p>
                    <p className={styles.DataValue}>{this.getVisibility()}</p>
                </div>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Дата:</p>
                    <p className={styles.DataValue}>К сожалению, дату мы нигде не считываем</p>
                </div>
                <div className={styles.DataRow}>
                    <p className={styles.DataTitle}>Адрес:</p>
                    <p className={styles.DataValue}>Заглушка</p>
                </div>


                <Link to="contacts"
                      className={styles.Btn + ' ' + styles.Backward}>Назад</Link>
                <Link to="map"
                      className={styles.Btn + ' ' + styles.Forward}>Далее</Link>
            </form>
        );
    }
}

export default CheckData;
