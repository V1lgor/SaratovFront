import React from 'react';
import styles from './MainContent.module.css';
import MainTopNav from "./Map/MainTopNav/MainTopNav";
import {Route, Switch} from 'react-router-dom';
import Events from "./Events/Events";
import Maps from "./Map/Maps";
import Report from "./Report/Report";
import FAQ from "./FAQ/FAQ";
import Ask_question from "./Ask_question/Ask_question";

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
                    <Route path= "/ask-question">
                        <Ask_question/>
                    </Route>
                    <Route path= "/faq">
                        <FAQ/>
                    </Route>
                    <Route path="/">
                        <Maps/>
                    </Route>

                </Switch>
            </main>
        );
    }
};

export default MainContent;