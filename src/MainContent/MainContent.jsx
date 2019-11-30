import React from 'react';
import styles from './MainContent.module.css';
import MainTopNav from "./Map/MainTopNav/MainTopNav";
import {Route, Switch} from 'react-router-dom';
import Events from "./Events/Events";
import Map from "./Map/Map";
import Report from "./Report/Report";

class MainContent extends React.Component {


    render() {
        return (
            <main className={styles.MainContent}>
                <Switch>
                    <Route path = "/send-report/">
                        <Report/>
                    </Route>

                    <Route path="/events">
                        <Events/>
                    </Route>
                    <Route path="/">
                        <Map/>
                    </Route>

                </Switch>
            </main>
        );
    }
};

export default MainContent;