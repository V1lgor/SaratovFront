import React from 'react';

import styles from './FaqItem.module.css';

class FaqItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ask: this.props.ask,
            answer: this.props.answer
        };

        this.answerRef = React.createRef();
    }

    componentDidMount() {
        this.answerRef.current.innerHTML = "<b>Ответ:</b> " + this.state.answer;
    }

    render() {
        return (
            <div className={styles.QuestionBlock}>
                <p className={styles.Question}><b>Вопрос: </b>{this.state.ask}</p>
                <p className={styles.Answer} ref = {this.answerRef}>
                </p>

            </div>

        )
    }
}

export default FaqItem;