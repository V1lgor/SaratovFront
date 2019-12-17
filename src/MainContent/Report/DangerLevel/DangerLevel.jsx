import React from 'react';
import {Link, NavLink} from "react-router-dom";

import styles from './DangerLevel.module.css';

class DangerLevel extends React.Component {

    constructor(props) {
        super(props);

        this.dangerLevelRange = React.createRef();

        this.handleDangerLevelRangeChange = this.handleDangerLevelRangeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            dangerLevel: 5,
            dangerLevelDescriptionList: [
                "Незначительный материальный ущерб",
                "Значительный материальный ущерб",
                "Угроза здоровью или жизни одного человека",
                "Угроза здоровью или жизни группы лиц"
            ]
        }
    }

    handleDangerLevelRangeChange() {
        let dangerLevel = this.dangerLevelRange.current.value;

        this.setState({dangerLevel});
    }

    dangerLevelToDescription(level) {
        if (level >= 1 && level < 4) {
            return this.state.dangerLevelDescriptionList[0];
        }
        if (level >= 4 && level < 8) {
            return this.state.dangerLevelDescriptionList[1];
        }
        if (level >= 8 && level < 10) {
            return this.state.dangerLevelDescriptionList[2]
        } else return this.state.dangerLevelDescriptionList[3];
    }


    handleSubmit() {
        let dangerLevel = {
            level: this.state.dangerLevel
        };

        this.props.updateReportDraft(dangerLevel, "dangerLevel");
    }

    render() {
        return (
            <form className={styles.DangerLevel}>
                <h2>Выберите уровень опасности:</h2>

                <div className={styles.DangerInput}>
                    <input type="range" min="1" max="10" step="1" ref={this.dangerLevelRange}
                           value={this.state.dangerLevel} onChange={this.handleDangerLevelRangeChange}/>
                </div>

                <p>{this.state.dangerLevel} - {this.dangerLevelToDescription(this.state.dangerLevel)}</p>
                <Link to = "report-type"   onClick={this.handleSubmit}>Назад</Link>
                <Link to = "choose-anon"   onClick={this.handleSubmit}>Далее</Link>

            </form>
        )
    }


}

export default DangerLevel;