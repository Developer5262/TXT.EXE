import React, {Component} from 'react';
import { 
    Text, 
    View 
} from 'react-native';

import styles from './styles'

import Button from './Button'

export default class Storyboard extends Component {
    render() {
        return (
            <View style = { styles.overlay }>
                <View style = { styles.button.container }>
                    <Button />
                    <Button />
                </View>
            </View>
        );
    }
}