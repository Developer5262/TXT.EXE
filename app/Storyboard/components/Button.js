import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from '../config/styles';
import PropTypes from 'prop-types';

const button = styles.button;

const Button = ( props ) => {
    return (
        <View style = { button.background }>
            <TouchableHighlight onPress = { () => props.onButtonPress( props.outcome ) }>
                <Text style = { button.text }>{ props.buttonTitle }</Text>
            </TouchableHighlight>
        </View>
    )
}

Button.PropTypes = {
    buttonTitle: PropTypes.string.isRequired,
    onButtonPress: PropTypes.func.isRequired
}

export default Button;