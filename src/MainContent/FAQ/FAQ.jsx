import React from 'react';
import styles from './FAQ.module.css';
import {NavLink} from "react-router-dom";

class FAQ extends React.Component {
    render() {
        return (
            <div className = {styles.faqParent}>
                <div className={styles.faqheader}>
                    <img src={require("../../img/imgfaq.png")} alt="" className={styles.imgfaq}/>
                    <p> Часто задаваемые вопросы </p>
                </div>

                <div className={styles.ask_and_answer}>
                    <details>
                        <summary>
                            Вопрос
                        </summary>
                    Ответ
                    </details>
                </div>

                <div className={styles.ask_and_answer}>
                    <details>
                        <summary>
                            Вопрос
                        </summary>
                        Ответ
                    </details>
                </div>
                <div className={styles.ask_and_answer}>
                    <details>
                        <summary>
                            Вопрос
                        </summary>
                        Ответ
                    </details>
                </div>
                <div className={styles.ask_and_answer}>
                    <details>
                        <summary>
                            Вопрос
                        </summary>
                        Ответ
                    </details>
                </div>
                <div className={styles.ask_and_answer}>
                    <details>
                        <summary>
                            Вопрос
                        </summary>
                        Ответ
                    </details>
                </div>
                <div className={styles.ask_and_answer}>
                    <details>
                        <summary>
                            Вопрос
                        </summary>
                        Ответ
                    </details>
                </div>
                <div className={styles.ask_and_answer}>
                    <details>
                        <summary>
                            Вопрос
                        </summary>
                        Ответ
                    </details>
                </div>

                <NavLink to = "ask-question" className={styles.any_questions}>Остались вопросы?</NavLink>

            </div>
        );
    }
};

export default FAQ;