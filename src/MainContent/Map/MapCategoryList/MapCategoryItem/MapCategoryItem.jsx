import React from 'react';

import styles from './MapCategoryItem.module.css'

class MapCategoryItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categoryTitle: this.props.title,
            problemCount: this.props.count,
            categoryIcon: "../../../../img/bus.svg"
        }

    }

    render() {
        return (
            <li className={styles.Item}>
                <img src={require("../../../../img/bus.svg")} alt="" className={styles.CategoryIcon}/>
                <p className={styles.CategoryTitle}>{this.state.categoryTitle}</p>&nbsp;
                <p className={styles.ProblemCount}>({this.state.problemCount})</p>
            </li>
        )
    }
}

export default MapCategoryItem;