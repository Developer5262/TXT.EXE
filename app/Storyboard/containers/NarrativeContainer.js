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
    constructor(props) {
        super(props)
        this.state = {
            story: [intro],
            factors: {}
        }
    }

    getItems = ( elements ) => {
        return elements.story.map((data) => {
            return (
                <View key = { data.id }>
                    <Text style = { styles.text }>{data}</Text>
                </View>
            )
        })
    }

    mapItems = ( items ) => {
        return items.map((data) => {
            return (
                <View>
                    <Partial
                        narrative = { data }
                        getItems = { this.getItems }
                        onLeftButtonPress = { this.handleLeftButtonPress }
                        onRightButtonPress = { this.handleRightButtonPress }
                        leftButtonTitle = { data.decisions[0] }
                        rightButtonTitle = { data.decisions[1] } />
                </View>
            )
        })
    }

    handleLeftButtonPress = (outcome) => {
        this.setState({ 
            story: this.state.story.concat([choice1_runtogetbags_post_choice2])
        })
    }

    handleRightButtonPress = () => {
        
    }

    render() {
        return (
            <View>
                { this.mapItems( this.state.story ) }
            </View>
        );
    }
}

NarrativeContainer.PropTypes = {
    
}