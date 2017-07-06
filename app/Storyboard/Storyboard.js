import React, {Component} from 'react';
import { 
    Text, 
    View 
} from 'react-native';
import styles from '../config/styles';
import Button from './Button'
import ChoiceContainer from './ChoiceContainer'
import NarrativeContainer from './NarrativeContainer';

export default class Storyboard extends Component {
    render() {
        return (
            <View>
                <View style = { styles.overlay }>
                    <NarrativeContainer />
                    <ChoiceContainer />
                </View>
                <View style = { styles.container.screen }>
                    
                </View>
            </View>
        );
    }
}