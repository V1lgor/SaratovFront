import React from 'react';
import styles from './Events.module.css';
import TopSearch from "./TopSearch/TopSearch";
import PieceOfNews from "./PieceOfNews/PieceOfNews";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }
    componentDidMount() {
        /*Пришли данные*/
        let events = [{
            id: 1,
            title: "Выпускной",
            date: "20 июня",
            time: "17:10",
            tags: ["Детям", "Не детям", "Не людям"]
        },
            {
                id: 2,
                title: "Отчисление",
                date: "1 декабря",
                time: "10:00",
                tags: []
            }];
        this.setState({events})
    }
    eventToPieceOfEvent() {
        return this.state.events.map(event => <PieceOfNews title = {event.title}
                                                           date = {event.date}
                                                           time = {event.time}
                                                           tags = {event.tags}
        />);
    }
    render() {
        return (
            <main className={styles.Events}>
                <TopSearch/>
                {this.eventToPieceOfEvent()}
            </main>
        );
    }
};

export default Events;