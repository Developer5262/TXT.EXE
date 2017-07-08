import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import Button from '../Button';
import PropTypes from 'prop-types';
import styles from '../config/styles'

export default class ChoiceContainer extends Component {
    render() {
        return (
            <View style = { styles.container.button }>
                <Button title = { this.props.decisions[0] } />
                <Button title = { this.props.decisions[1] } />
            </View>
        );
    }
}

ChoiceContainer.PropTypes = {
    decisions: PropTypes.array.isRequired
}