import React from 'react';
import styles from './PieceOfNews.module.css';

class PieceOfNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={styles.Piece}>
                <div className={styles.Title}>
                    <p className={styles.EventTitle}>{this.props.title}</p>
                    <p className={styles.EventDatetime}>{this.props.date} в {this.props.time}</p>
                </div>
                <img src={require("../../../img/boat.jpg")} alt="" className={styles.Image}/>
                <div className={styles.BottomPart}>
                    {this.props.tags.map(tag => <span className={styles.Tags}>#{tag}</span>)}

                </div>
            </div>
        );
    }
};

export default PieceOfNews;