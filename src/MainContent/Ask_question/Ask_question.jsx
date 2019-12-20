import React from 'react';
import styles from './Ask_question.module.css';
import {NavLink} from "react-router-dom";

class Ask_question extends React.Component {

    constructor(props) {
        super(props);

        this.emailInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.phoneInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
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
            /*erInput.innerHTML = err;
            event.preventDefault(); */
        }
    }

    render() {
        return (
            <form className={styles.formBody}>
                <p className={styles.feedbackTitle}>Обратная связь</p>
                <p className={styles.pageDescription}>Оставьте контактные данные и мы с вами свяжемся в удобное для вас время</p>

                <div className={styles.inputField}>
                    <label htmlFor="Email"> Email:</label>
                    <input ref = {this.emailInput} type="email" id = "Email" pattern=".+@gmail.com" required/>
                    <p id = "errInputField"></p>
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="Phone"> Телефон:</label>
                    <input ref = {this.phoneInput} type="tel" id = "Phone" required/>
                    <p id = "errInputField"></p>
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="description" className={styles.lblDescription}>Кратко опишите вашу проблему:</label>
                    <textarea ref = {this.descriptionInput} id = "description" required/>
                </div>

                <NavLink to = "map"  onClick = {this.handleSubmit} className={styles.sendQuestion}>Отправить</NavLink>

            </form>
        );
    }
};

export default Ask_question;