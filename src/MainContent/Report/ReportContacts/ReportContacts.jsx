import React from 'react';

import styles from './ReportContacts.module.css';
import {Link} from "react-router-dom";

class ReportContacts extends React.Component {

    constructor(props) {
        super(props);

        this.Name  = React.createRef();
        this.Email = React.createRef();
        this.Phone = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit() {

        let Person = {
            id: "66",
            name:  this.Name.current.value,
            phone: this.Phone.current.value,
            email: this.Email.current.value
        }
        this.props.updateReportDraft(Person, "Person");
        console.log('person:');
        console.log(Person);
    }

    render() {
        return (
            <div className = {styles.ContactsBody}>
                <h2>Оставьте свои контакты</h2>
                <p>Введите контактные данные человека, которому можно сообщить о результатах работы</p>
                <div className = {styles.repContactsElem}>
                    <label htmlFor = "Name">Имя</label>
                    <input ref = {this.Name} id = "Name" type = "text"/>
                </div>
                <div className = {styles.repContactsElem}>
                    <label htmlFor = "Email">Email</label>
                    <input ref = {this.Email} id = "Email" type = "Email" pattern = ".+@gmail.com, .+@yandex.ru"/>
                </div>
                <div className = {styles.repContactsElem}>
                    <label htmlFor = "Phone">Телефон</label>
                    <input ref = {this.Phone} id = "Phone" type = "phone"  pattern = "+7"/>
                </div>
                <div className={styles.buttons}>
                    <Link to = "choose-anon" onClick = {this.handleSubmit}
                          className = {styles.Btn + ' ' + styles.Backward}>Назад</Link>
                    <Link to = "visibility" onClick = {this.handleSubmit}
                          className = {styles.Btn + ' ' + styles.Forward}>Далее</Link>
                 </div>
            </div>
        )
    }
}

export default ReportContacts;