import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from './styles'
const button = styles.button;

export default class Button extends Component {
    render() {
        return (
            <View style = { button.background }>
                <TouchableHighlight>
                    <Text style = { button.text }>Button</Text>
                </TouchableHighlight>
            </View>
        )
    }
}