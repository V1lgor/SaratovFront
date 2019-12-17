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
        //TODO: сделать ошибку через createElement
        let mailInput =  this.emailInput.current.value;
        let erInput = document.getElementById("errInputField");
        try {
            if (!mailInput)
                throw "hi girls and boys";

            let question = {
                email: this.emailInput.current.value,
                description: this.descriptionInput.current.value
            };

            alert('Ваш вопрос принят на рассмотрение');
        }
        catch(err) {
            erInput.innerHTML = err;
            event.preventDefault();
        }
    }

    render() {
        return (
            <form className={styles.formBody}>
                <p>Задайте свой вопрос</p>

                <div className={styles.inputField}>
                    <label htmlFor="Email"> Email:</label>
                    <input ref = {this.emailInput} type="email" id = "Email" placeholder = "Введите почту" pattern=".+@gmail.com" required/>
                    <p id = "errInputField"></p>
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="description">Описание:</label>
                    <textarea ref = {this.descriptionInput} id = "description" placeholder = "Введите вопрос" required/>
                </div>

                <NavLink to = "map"  onClick = {this.handleSubmit} className={styles.sendQuestion}>Отправить</NavLink>

            </form>
        );
    }
};

export default Ask_question;