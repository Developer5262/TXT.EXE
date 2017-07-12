<<<<<<< HEAD
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from '../config/styles';
import PropTypes from 'prop-types';
=======
import styles from '../config/styles';
>>>>>>> 239ed512aa56be51856b97b26607e3436f2eeaf7

const button = styles.button;

const Button = ( props ) => {
    return (
        <View style = { button.background }>
<<<<<<< HEAD
            <TouchableHighlight onPress = {() => props.onButtonPress( props.outcome )}>
=======
            <TouchableHighlight onPress = {() => props.onButtonPress( props.narrative )}>
>>>>>>> 239ed512aa56be51856b97b26607e3436f2eeaf7
                <Text style = { button.text }>{ props.buttonTitle }</Text>
            </TouchableHighlight>
        </View>
    )
}

<<<<<<< HEAD
Button.PropTypes = {
    buttonTitle: PropTypes.string.isRequired,
    onButtonPress: PropTypes.func.isRequired,
    narrative: PropTypes.object.isRequired,
    outcome: PropTypes.object.isRequired
}

=======
>>>>>>> 239ed512aa56be51856b97b26607e3436f2eeaf7
export default Button;