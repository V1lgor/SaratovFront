import React from 'react';

import styles from './SocialLink.module.css'


class SocialLink extends React.Component {
    constructor(props) {
        super(props);
        let socialIconFile = this.props.socialIconFile;

        this.state = {
            socialIconFile: socialIconFile
        }

        console.log(this.state);
    }

    state = {
        socialIconFile: ''
    };

    componentDidMount() {

    }

    render() {
        let imgPath = './../../../img/' + this.state.socialIconFile;

        console.log(imgPath);
        return (
            <a href = "#" className={styles.SocialLink}>
                <img src = {require(`./../../../img/social-icons/${this.state.socialIconFile}`)} alt = ''/>
            </a>
        )
    }
}

export default SocialLink;