import React from 'react';
import styles from './EventsPage.module.css';
import TopSearch from "./TopSearch/TopSearch";
import Event from "./Event/Event";

class EventsPage extends React.Component {


    render() {
        return (
            <main className={styles.EventsPage}>
                <TopSearch/>
                <div className={styles.Events}>
                    <Event/><Event/><Event/><Event/><Event/>
                </div>
            </main>
        );
    }
};

export default EventsPage;