import React from 'react';

import styles from './ChooseAnonymous.module.css';

class ChooseAnonymous extends React.Component{

    constructor(props) {
        super(props);

        this.anonymousCheckbox = React.createRef();
        this.showOnMapCheckbox = React.createRef();
    }



    render() {
        return (
            <form className={styles.AnonForm}>
                <p>
                    Выберите, как будет зарегистрировано Ваше сообщение. В случае анонимности,<br/>
                    исполнители получат Ваши контактные данные.
                </p>
                <div className={styles.Checkboxes}>
                    <div className={styles.Anon}>
                        <label htmlFor="">Анонимность</label>
                        <input id = "anonymous" type="checkbox" ref = {this.anonymousCheckbox}/>
                    </div>
                    <div className={styles.ShowOnMap}>
                        <label htmlFor="">Отображать на карте</label>
                        <input id = "showOnMap" type="checkbox" checked ref = {this.showOnMapCheckbox}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ChooseAnonymous;