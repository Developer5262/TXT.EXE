import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';

import styles from './styles';
const button = styles.button;

export default class Button extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style = { button.background } onPress = { () => Actions.storyboard() }>
                    <Text style = { button.text }>Let's Begin</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
