import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View
} from 'react-native';
import { 
    choice1_runtogetbags_post_choice2,
    intro
} from '../story/chapterone'
import styles from '../config/styles';
import ChoiceContainer from './ChoiceContainers';

export default class NarrativeContainer extends Component {
    handleLeftPress = () => {

    }

    handleRightPress = () => {
        
    }

    handleLeftButtonPress = () => {
        
    }

    getItems = ( elements ) => {
        return elements.story.map((data) => {
            return (
                <View>
                    <Text style = { styles.text }>{data}</Text>
                </View>
            )
        })
    }
    
    render() {
        return (
            <View>
                <View style = { styles.container.text }>
                    { this.getItems( choice1_runtogetbags_post_choice2 ) }
                    <ChoiceContainer 
                        decisions = { choice1_runtogetbags_post_choice2.decisions }
                        onLeftPressed = { this.handleLeftPressed} />
                </View>
                {renderif(onLeftPressed,
                    <View style = { styles.container.text }>
                        { this.getItems( intro ) }
                        <ChoiceContainer decisions = { intro.decisions } />
                    </View>
                )}
            </View>
        );
    }
}

NarrativeContainer.PropTypes = {
    
}