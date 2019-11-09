import React from 'react';

import styles from './Social.module.css'
import SocialLink from "./SocialLink/SocialLink";


class Social extends React.Component {
    state = {
        socialIconFiles: [
            'facebook.png',
            'instagram.png',
            'odnoklassniki.png',
            'twitter.png',
            'vk.png',
        ]
    };

    getSocialLinks() {
        return this.state.socialIconFiles.map(fileName => {
            return (<SocialLink socialIconFile = {fileName}/>);
        });
    };
    render() {
        return (
            <div className={styles.Social}>
                {this.getSocialLinks()}
            </div>
        )
    }
}

export default Social;