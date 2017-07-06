import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Button from '../Button';
import styles from '../config/styles';

export default class ChoiceContainer extends Component {
    render() {
        return (
            <View style = { styles.container.button }>
                <Button title = 'Go Left' />
                <Button title = 'Go Right' />
            </View>
        );
    }
}