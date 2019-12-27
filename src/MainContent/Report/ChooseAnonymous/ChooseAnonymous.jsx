import React from 'react';

import styles from './ChooseAnonymous.module.css';
import {Link} from "react-router-dom";

class ChooseAnonymous extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            anonymous: false
        };

        this.anonymousCheckbox = React.createRef();
        this.showOnMapCheckbox = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let visible = this.showOnMapCheckbox.current.checked;
        let anonymous = this.anonymousCheckbox.current.checked;

        this.setState({visible});
        this.setState({anonymous});

        this.props.updateReportDraft(anonymous, "anonymous");
        this.props.updateReportDraft(visible  , "visible");
    }

    render() {
        return (
            <form className={styles.AnonForm}>
                <h2 className={styles.FormTitle}>Анонимность сообщения</h2>
                <p className={styles.AnonDescription}>
                    Выберите, как будет зарегистрировано Ваше сообщение. В случае выбора варианта "Анонимно",
                    исполнителям будут доступны Ваши
                    контактные данные.
                </p>
                <div className={styles.Description}>
                    <h3>Анонимность</h3>
                    <label htmlFor="anonymous">Я согласен, что мои персональные данные не будут переданы исполняющим
                        лицам</label>
                </div>
                <input id="anonymous" type="checkbox" ref={this.anonymousCheckbox}/>
                <div className={styles.Description}>
                    <h3>Отображаемость на карте</h3>
                    <label htmlFor="showOnMap">Я согласен, что мое сообщение не будет отображаться на карте у всех
                        пользователей</label>
                </div>
                <input id="showOnMap" type="checkbox" checked="false" ref={this.showOnMapCheckbox}/>
                <Link to="danger-level" onClick={this.handleSubmit}
                      className={styles.Btn + ' ' + styles.Backward}>Назад</Link>
                <Link to="contacts" onClick={this.handleSubmit}
                      className={styles.Btn + ' ' + styles.Forward}>Далее</Link>
            </form>
        )
    }
}

export default ChooseAnonymous;