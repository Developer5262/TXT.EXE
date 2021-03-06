import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View
} from 'react-native';

import {
    intro
} from '../story/chapterone';

import styles from '../config/styles';
import Partial from '../containers/Partial';

import {
    FadeIn,
    TimingDriver
} from '@shoutem/animation';

/**
 * container for variables and list of story elements (Partial)
 * responsilbe for generation 
 * @exportgit add .
 * 
 * @class Narrative
 * @extends {Component}
 */
export default class Narrative extends Component {
    /**
     * Creates a 
     * @param {props} props 
     * @memberof Narrative
     */
    constructor(props) {
        super(props)
        this.state = {
            story: [intro],
            factors: {}
        }
    }

    /**
     * Pulls elements of story arrays and generates them on screen.
     * TODO: Animate these in, preferably one to two and a half seconds apart
     * @memberof Narrative
     */
    getItems = ( elements ) => {
        return elements.story.map( ( data, key ) => {
            return (
                <View key = { key.toString() }>
                    <Text style = { styles.text }>{ data }</Text>
                </View>
            )
        })
    }

    /**
     * Pulls all narrative sections and maps them onto Partial objects
     * @memberof Narrative
     */
    mapItems = ( items ) => {
        return items.map( ( data, key ) => {
            return (
                <View key = { key.toString() }>
                    <Partial
                        narrative = { data }
                        getItems = { this.getItems }
                        onLeftButtonPress = { this.handleLeftButtonPress }
                        onRightButtonPress = { this.handleRightButtonPress }
                        leftOutcome = { data.leftOutcome }
                        rightOutcome = { data.rightOutcome } />
                </View>
            )
        })
    }

    /**
     * On the left button click, add the outcome object to the array. 
     * Then map the objects onto the screen using mapItems()
     * @param {narrative} outcome 
     * @memberof Narrative
     */
    handleLeftButtonPress = ( outcome ) => {
        this.setState({ 
            story: [outcome]
        })
    }

    /**
     * On the left button click, add the outcome object to the array. 
     * Then map the objects onto the screen using mapItems()
     * TODO: Automate this process to have partial take a prop for outcome.
     * @memberof Narrative
     */
    handleRightButtonPress = ( outcome ) => {
        this.setState({ 
            story: [outcome]
        })
    }

    render() {
        return (
            <View>
                { this.mapItems( this.state.story ) }
            </View>
        );
    }
}

Narrative.PropTypes = {
    
}