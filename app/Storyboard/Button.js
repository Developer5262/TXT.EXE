import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from './config/styles';
const button = styles.button;

export default class Button extends Component {
    render() {
        const { title } = this.props
        return (
            <View style = { button.background }>
                <TouchableHighlight>
                    <Text style = { button.text }>{ title }</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

Button.PropTypes = {
    title: PropTypes.string.isRequired
}