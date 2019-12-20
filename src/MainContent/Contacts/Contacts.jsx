import React from 'react';
import styles from './Contacts.module.css';

class Contacts extends React.Component {

    render() {
        return (
            <div className={styles.ContactsBody}>
                <h2 className={styles.ContactsTitle}>Контакты</h2>
                <div className={styles.ContactsContent}>
                    <p>Телефон</p>
                    <p>+7(8452)21-06-25</p>
                    <p>E-mail:</p>
                    <p>Saratov@gmail.com</p>
                </div>
                <p className={styles.ContactsLast}> Заняты? Оставте Ваши данные, и мы свяжемся с Вами в удобное для вас время.</p>
            </div>
        );
    }
};

export default Contacts;