import React from 'react';
import MainTopNav from "./MainTopNav/MainTopNav";
import styles from "../Map/Maps.module.css";
import {Route} from "react-router-dom";
import {YMaps, Map, Placemark} from "react-yandex-maps";

class Maps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [], problems: []
        };
    }

    componentDidMount() {
        /*Пришли данные*/
        let events = [{
            id: 1,
            title: "Выпускной",
            date: "20 июня",
            time: "17:10",
            description: "Выпускной 11 класса",
            tags: ["Детям", "Не детям", "Не людям"],
            x_pos: 51.52,
            y_pos: 46.027
        },
            {
                id: 2,
                title: "Отчисление",
                date: "1 декабря",
                time: "10:00",
                tags: [],
                x_pos: 51.54,
                y_pos: 46.03
            }];
        let problems = [{
            id: 1,
            title: "Отчисление",
            date: "1 декабря",
            time: "10:00",
            description: "Очень большая проблема",
            tags: [],
            levelDanger: 10,
            x_pos: 51.53,
            y_pos: 46.02
        }];
        this.setState({events, problems})
    }

    pointAndBalloon(element, color){
        return element.map(point => <Placemark
                    key={point.id}
                    geometry={[point.x_pos, point.y_pos]}
                    properties={{
                        hintContent: point.title,
                        balloonContentHeader: point.title,
                        balloonContent: point.description,
                        balloonContentFooter: point.date + " " + point.time
                    }}
                    modules={[
                        "geoObject.addon.hint",
                        'geoObject.addon.balloon',
                        "layout.ImageWithContent"
                    ]}

                    options={{
                        /*iconLayout:'default#image',*/
                        preset: color,
                        /*iconImageHref: 'boat.jpg',*/
                        iconContentLayout: point.title,
                        iconContentSize: [100,100],
                        iconContentOffset: [10, 10],
                    }}

                />


        )
    }

    render() {
        return (
            <section id={"map"}>
                <MainTopNav/>

                <YMaps >
                    <div>
                        <Map defaultState={{center:[51.533103, 46.034158],
                                            zoom: 12}}
                             className={styles.Maps}>



                            {this.pointAndBalloon(this.state.events, 'islands#blueDotIcon')}
                            {this.pointAndBalloon(this.state.problems, 'islands#redDotIcon')}
                        </Map>
                    </div>
                </YMaps>
            </section>
        );
    }
}

export default Maps;