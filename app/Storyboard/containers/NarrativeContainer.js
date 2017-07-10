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
import Partial from '../containers/Partial';

export default class NarrativeContainer extends Component {
    getItems = ( elements ) => {
        return elements.story.map((data) => {
            return (
                <View key = { data.id }>
                    <Text style = { styles.text }>{data}</Text>
                </View>
            )
        })
    }

    state = {
        view: (
            <Partial 
                narrative = { choice1_runtogetbags_post_choice2 } 
                getItems = { this.getItems }
                onLeftButtonPress = { this.handleLeftPress }
                onRightButtonPress = { this.handleRightPress }
                leftButtonTitle = "Take a Walk"
                rightButtonTitle = "Run" />
        ),
        activeVariables: {}
    }

    handleLeftPress = () => {
        newview = <Partial narrative = { intro } getItems = { this.getItems }/>

        this.setState({
            view: Object.assign({}, view, newview)
        })
    }

    handleRightPress = (outcomes) => {
        
    }

    render() {
        return (
            <View>
                {this.state.view}
            </View>
        );
    }
}

NarrativeContainer.PropTypes = {
    
}