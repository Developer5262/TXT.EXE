import React, {Component} from 'react';
import { 
    Text, 
    View 
} from 'react-native';

import styles from './styles'

import Button from './Button'

import {
    FadeIn,
    TimingDriver
} from '@shoutem/animation'

export default class Home extends Component {
    render() {
        const driver = new TimingDriver({
            duration: 500,
            delay: 300
        })
        driver.toValue(1)
        return (
            <View style = { styles.container }>
                <FadeIn driver = { driver }>
                    <Text style = { styles.title }>TXT.EXE</Text>
                </FadeIn>
                <FadeIn driver = { driver }>
                    <Button />
                </FadeIn>
            </View>
        );
    }
}
