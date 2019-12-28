import React from 'react';
import {Switch, Route} from "react-router";
import ReportTheme from "./ReportTheme/ReportTheme";
import ReportType from "./ReportType/ReportType";
import DangerLevel from "./DangerLevel/DangerLevel";
import ChooseAnonymous from "./ChooseAnonymous/ChooseAnonymous";
import ReportContacts from "./ReportContacts/ReportContacts";
import CheckData from "./CheckData/CheckData";

import styles from './Report.module.css';

class Report extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 3,
            category: {id: 0, category: null},
            dangerLevel: 0,
            title: "",
            description: "",
            location:  {
                id: 0,
                longitude: 0,
                latitude: 0,
                adminAreaId: 0,
                adminAreaName: "",
                city: "",
                district: "",
                streetName: "",
                streetNumber: 0,
                flatNumber: 0
            },
            complaintTimestamp: "",
            creationTimestamp: "",
            fileLinks: [],
            person : {
                id: 0,
                name: "",
                phone: "",
                email: ""
            },
            userId: 0,
            status: 0,
            visible: true,
            anonymous: true
        };

        this.updateReportDraft = this.updateReportDraft.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getDescription = this.getDescription.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.getComplaintTimestamp = this.getComplaintTimestamp.bind(this);

        this.getPhone = this.getPhone.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getVisibility = this.getVisibility.bind(this);
        this.getAnonymous = this.getAnonymous.bind(this);
        this.getDangerLevel = this.getDangerLevel.bind(this);
        this.getPersonName = this.getPersonName.bind(this);

        console.log(this.state);
    }

    updateReportDraft(draftPart, draftPartTitle) {

        this.state[draftPartTitle] = draftPart;

        this.setState(this.state);
    }

    getTitle() {
        return this.state.title
    }

    getDescription() {
        return this.state.description
    }

    getCategory() {
        return this.state.category.category
    }

    getPersonName() {
        return this.state.person.name
    }

    getComplaintTimestamp() {
        return this.state.complaintTimestamp
    }

    getPhone() {
        return this.state.person.phone
    }

    getEmail() {
        return this.state.person.email
    }

    getVisibility() {
        return this.state.visible
    }

    getAnonymous() {
        return this.state.anonymous
    }

    getDangerLevel() {
        return this.state.dangerLevel;
    }

    render() {

        console.log("Report state: ");
        console.log(this.state);
        return (
            <Switch>
                <Route path = "/send-report/report-type">
                    <ReportType updateReportDraft = {this.updateReportDraft}/>
                </Route>
                <Route path = "/send-report/danger-level">
                    <DangerLevel updateReportDraft = {this.updateReportDraft}/>
                </Route>
                <Route path = "/send-report/choose-anon">
                    <ChooseAnonymous updateReportDraft = {this.updateReportDraft}/>
                </Route>
                <Route path = "/send-report/contacts">
                    <ReportContacts updateReportDraft = {this.updateReportDraft}/>
                </Route>
                <Route path = "/send-report/check-data">

                    <CheckData updateReportDraft = {this.updateReportDraft}
                               getTitle = {this.getTitle}
                               getDescription = {this.getDescription}
                               getCategory = {this.getCategory}
                               getComplaintTimestamp = {this.getComplaintTimestamp}
                               getPhone = {this.getPhone}
                               getEmail = {this.getEmail}
                               getVisibility = {this.getVisibility}
                               getAnonymous = {this.getAnonymous}
                               getDangerLevel = {this.getDangerLevel}
                               getPersonName = {this.getPersonName}/>
                </Route>
                <Route path = "/send-report/">
                    <ReportTheme
                        updateReportDraft = {this.updateReportDraft}/>
                </Route>
            </Switch>
        );
    }
}

export default Report;