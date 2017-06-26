import React, {Component} from 'react';
import { 
    Text, 
    View 
} from 'react-native';

import styles from './styles'

import Button from './Button'

export default class Home extends Component {
    render() {
        return (
            <View style = { styles.container }>
                <Text style = { styles.title }>TXT.EXE</Text>
                <Button />
            </View>
        );
    }
}
