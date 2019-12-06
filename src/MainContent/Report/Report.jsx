import React from 'react';
import {Switch, Route} from "react-router";
import ReportTheme from "./ReportTheme/ReportTheme";
import ReportType from "./ReportType/ReportType";

class Report extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.updateReportDraft = this.updateReportDraft.bind(this);
    }

    updateReportDraft(draftPart, draftPartTitle) {

        this.state[draftPartTitle] = draftPart;

        this.setState(this.state);
    }

    render() {

        console.log("Report state: ");
        console.log(this.state);
        return (
            <Switch>
                <Route path = "/send-report/theme">
                    <ReportTheme updateReportDraft = {this.updateReportDraft}/>
                </Route>
                <Route path = "/send-report/report-type">
                    <ReportType updateReportDraft = {this.updateReportDraft}/>
                </Route>
                <Route path = "/send-report/danger-level">
                    <ReportTheme updateReportDraft = {this.updateReportDraft}/>
                </Route>
            </Switch>
        );
    }

}

export default Report;