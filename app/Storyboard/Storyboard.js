import React, {Component} from 'react';
import { 
    Text, 
    View,
    Image,
    ScrollView 
} from 'react-native';

import styles from './config/styles'
import images from '../images';
import Narrative from './containers/Narrative';

import {
    TimingDriver,
    FadeIn
} from '@shoutem/animation';

export default class Storyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chapter: 1
        }
    }

    nextChapter = () => {
        if( !( lastChapter <= this.state.chapter ) ) {
            this.setState({ chapter: chapter + 1 })
        }
    }

    render() {
        return (   
            <Image
                source = { images[this.state.chapter - 1] } 
                style = { styles.container.screen }>
                <View style = { styles.overlay }>
                    <ScrollView>
                        <Narrative />
                    </ScrollView>
                </View>
            </Image>
        );
    }
}