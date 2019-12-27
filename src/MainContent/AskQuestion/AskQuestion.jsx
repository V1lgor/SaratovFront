import React from 'react';
import styles from './AskQuestion.module.css';
import {NavLink} from "react-router-dom";

class AskQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.emailInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.phoneInput = React.createRef();

        this.askForm = React.createRef();

        this.state = {
            errorMessage: null,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        //TODO: сделать ошибку через createElement
        let mailInput =  this.emailInput.current.value;
        let erInput = document.getElementById("errInputField");
        let phoneInput = this.phoneInput.current.value;
        try {
            if (!mailInput || !phoneInput)
                throw "hi girls and boys";

            let feedback = {
                email: mailInput,
                description: this.descriptionInput.current.value,
                phone: phoneInput
            };

            alert('Ваш вопрос принят на рассмотрение');
        }
        catch(err) {

            if (!this.state.errorMessage) {
                this.state.errorMessage = document.createElement("p");

                 this.state.errorMessage.style.fontStyle = "italic";
                 this.state.errorMessage.style.color = "#f00";
                 this.state.errorMessage.style.gridColumnStart = "1";
                 this.state.errorMessage.style.gridColumnEnd = "-1";
                 this.state.errorMessage.style.marginTop = "20px";

                this.askForm.current.appendChild( this.state.errorMessage);

                 this.state.errorMessage.innerText = "Ошибка: проверьте введенные данные";
            }


        }
    }

    render() {
        return (
            <form className={styles.FormBody} ref = {this.askForm}>
                <h2>Обратная связь</h2>
                <p className={styles.PageDescription}>Оставьте свои контактные данные, чтобы мы связались
                    с Вами в удобное для Вас время.</p>

                <div className={styles.InputField}>
                    <label htmlFor="Email"> Email:</label>
                    <input ref = {this.emailInput} type="email" id = "Email" pattern=".+@gmail.com" required/>
                </div>

                <div className={styles.InputField}>
                    <label htmlFor="Phone"> Телефон:</label>
                    <input ref = {this.phoneInput} type="tel" id = "Phone" required/>
                </div>

                <div className={styles.InputField}>
                    <label htmlFor="description">Кратко опишите вашу проблему:</label>
                    <textarea ref = {this.descriptionInput} id = "description" required/>
                </div>

                <NavLink to = "map"  onClick = {this.handleSubmit} className={styles.SendQuestion}>Отправить</NavLink>

            </form>
        );
    }
};

export default AskQuestion;