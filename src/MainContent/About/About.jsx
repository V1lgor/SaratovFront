import React from 'react';
import styles from './About.module.css';
import TopPanel from "./TopPanel/TopPanel";


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }


    render(){
        return (
            <main className={styles.About}>
                <TopPanel/>

                    <ul>
                <li><h2>Проект "Саратов" является веб-ресурсом, предоставляющим пользователю возможность оставлять отзывы,
                    оповещать и быть оповещенным о различных происшествиях, жалобах, мероприятиях и новостях,
                    касающихся города Саратова, должностных лицах, ответственных за место происшествия с дальнейшей
                    возможностью обращения к ним в публичной форме, а также возможность коммуникации между жителями
                    одного дома, района или улицы, для решения локальных проблем.</h2></li>
                        <li><img src={require("../../img/mymost.png")} alt=""/></li></ul>

            </main>
        );
    }
};

export default About;