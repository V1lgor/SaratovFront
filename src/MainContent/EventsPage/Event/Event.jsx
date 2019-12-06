import React from 'react';

import styles from './Event.module.css';

class Event extends React.Component {
    render() {
        return (
            <div className={styles.Event}>
                <p className={styles.EventTitle}>Последние паруса</p>
                <p className={styles.EventDate}>20 октября 2019 воскресенье 12:00</p>
                <img src={require('./../../../img/event.jpg')} alt=""/>
            </div>
        )
    }
}

export default Event;