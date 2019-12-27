import React from 'react';
import styles from './Contacts.module.css';

class Contacts extends React.Component {

    render() {
        return (
            <div className={styles.ContactsBody}>
                <h2 className={styles.ContactsTitle}>Контакты</h2>
                <div className={styles.ContactsContent}>
                    <p><b>Телефон: </b> +7(8452)21-06-25</p>
                    <p><b>E-mail: </b>Saratov@gmail.com</p>
                    <p><b>Адрес: </b>г. Саратов, ул. Вольская, д. 10а, ком. 418</p>
                </div>
            </div>
        );
    }
};

export default Contacts;