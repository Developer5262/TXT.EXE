import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from '../config/styles';
import PropTypes from 'prop-types';
import { 
    choice1_runtogetbags_post_choice2,
    intro
} from '../story/chapterone'

const button = styles.button;

const Button = ( props ) => {
    return (
        <View>
            <TouchableHighlight style = { button.background } onPress = { props.onButtonPress }>
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