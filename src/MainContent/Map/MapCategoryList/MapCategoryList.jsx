import React from 'react';

import styles from './MapCategoryList.module.css';
import MapCategoryItem from "./MapCategoryItem/MapCategoryItem";

class MapCategoryList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categoryList: [
                {
                    title: "Дворовые территории",
                    count: 4998
                },
                {
                    title: "Многоквартирные дома",
                    count: 5273
                },
                {
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },{
                    title: "Многоквартирные дома",
                    count: 5273
                },
            ]
        }
    }

    categoryListToItems() {
        return this.state.categoryList.map(category => <MapCategoryItem title={category.title} count={category.count}/>)
    }

    render() {
        return (
            <ul className={styles.MapCategoryList}>
                {this.categoryListToItems()}
            </ul>
        );
    }
}

export default MapCategoryList;