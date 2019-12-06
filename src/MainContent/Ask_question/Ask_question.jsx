import React from 'react';
import styles from './Ask_question.module.css';
import {NavLink} from "react-router-dom";

class Ask_question extends React.Component {

    constructor(props) {
        super(props);

        this.emailInput = React.createRef();
        this.descriptionInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        let question = {
            email: this.emailInput.current.value,
            description: this.descriptionInput.current.value
        };

        alert('Ваш вопрос принят на рассмотрение');
    }

    render() {
        return (
            <form className={styles.formBody}>
                <p>Задайте свой вопрос</p>

                <div className={styles.inputField}>
                    <label htmlFor="Email"> Email:</label>
                    <input ref = {this.emailInput} type="text" id = "Email" placeholder = "Введите почту"/>
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="description">Описание:</label>
                    <textarea ref = {this.descriptionInput} id = "description" placeholder = "Введите вопрос"/>
                </div>

                <NavLink to = "map"  onClick = {this.handleSubmit} className={styles.sendQuestion}>Отправить</NavLink>

            </form>
        );
    }
};

export default Ask_question;