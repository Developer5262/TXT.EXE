import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View
} from 'react-native';
import styles from '../config/styles';

export default class NarrativeContainer extends Component {
    render() {
        return (
            <View style = { styles.container.text }>
                <Text style = { styles.text }>Text</Text>
            </View>
        );
    }
}

NarrativeContainer.PropTypes = {
    
}