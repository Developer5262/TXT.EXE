import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';

import styles from './styles';
const button = styles.button;

export default class Button extends Component {
    render() {
        return (
            <View style = { button.background }>
                <TouchableHighlight onPress = { () => Actions.storyboard() }>
                    <Text style = { button.text }>Let's Begin</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
