import React, {Component} from 'react';
import { 
    Text, 
    View 
} from 'react-native';
import styles from './config/styles'
import Button from './Button'
import ChoiceContainer from './containers/ChoiceContainer'
import NarrativeContainer from './containers/NarrativeContainer';

export default class Storyboard extends Component {
    render() {
        return (
            <View style = { styles.overlay }>
                <NarrativeContainer />
                <ChoiceContainer />
            </View>
        );
    }
}