import React, {Component} from 'react';
import { 
    Text, 
    View,
    Image,
    ScrollView 
} from 'react-native';

import styles from './config/styles'
import images from './images/images';
import Narrative from './containers/Narrative';

import {
    TimingDriver,
    FadeIn
} from '@shoutem/animation';

export default class Storyboard extends Component {
    render() {
        return (   
            <Image
                source = {require('./images/airportterminal.jpg')} 
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