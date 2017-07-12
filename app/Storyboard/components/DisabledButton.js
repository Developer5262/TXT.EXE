<<<<<<< HEAD
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import styles from '../config/styles'
import PropTypes from 'prop-types';
=======
import styles from '../config/styles'
>>>>>>> 239ed512aa56be51856b97b26607e3436f2eeaf7

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

<<<<<<< HEAD
DisabledButton.PropTypes = {
    buttonTitle: PropTypes.string.isRequired
}

=======
>>>>>>> 239ed512aa56be51856b97b26607e3436f2eeaf7
export default DisabledButton;