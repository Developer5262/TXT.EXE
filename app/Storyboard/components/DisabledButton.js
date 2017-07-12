import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import styles from '../config/styles'
import PropTypes from 'prop-types';

const disabled = styles.button.disabled;

const DisabledButton = ( props ) => {
    return (
        <View style = { disabled.background }>
            <TouchableWithoutFeedback>
                <Text style = { disabled.text }>{ props.buttonTitle }</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

DisabledButton.PropTypes = {
    buttonTitle: PropTypes.string.isRequired
}

export default DisabledButton;