import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import styles from '../config/styles';
import Button from '../components/Button';
import DisabledButton from '../components/DisabledButton';
import PropTypes from 'prop-types';

import { 
    choice1_runtogetbags_post_choice2,
    intro
} from '../story/chapterone';

import {
    TimingDriver,
    FadeIn
} from '@shoutem/animation';

/**
 * Resonsible for generating a view of story, elements, and their respective
 * buttons, along with generating views of outcomes
 * @export
 * @class Partial
 * @extends {Component}
 */
export default class Partial extends Component {
    /**
     * Creates an instance of Partial, with state that determines
     * if the contained buttons are active or not.
     * @param {props} props 
     * @memberof Partial
     */
    constructor(props) {
        super(props)
        this.state = {
            disabled: false
        }
    }
    
    /**
     * Disables an active button on click, so that the same story object
     * is not generated more than once.
     * @memberof Partial
     */
    disableButton = () => {
        this.setState({
            disabled: true
        })
    }

    render() { 
        const driver = new TimingDriver({
            duration: 500
        })

        driver.toValue(1)

        var item = !(this.props.leftOutcome == null || this.props.rightOutcome == null) ? (
            <View style = { styles.container.button }>
                <Button
                    buttonTitle = { this.props.narrative.decisions[0] }
                    onButtonPress = {() => this.props.onLeftButtonPress( this.props.leftOutcome ) }/>
                <Button
                    buttonTitle = { this.props.narrative.decisions[1] }
                    onButtonPress = {() => this.props.onRightButtonPress( this.props.rightOutcome ) } />
            </View>
        ) : (
            <View>
                <TouchableOpacity>
                    <Text style = { styles.text }>END OF DEMO - CHAPTERS TWO AND THREE COME OUT NEXT MONTH</Text>
                </TouchableOpacity>
            </View>
        )
        return (
            <View style = { styles.container.text }>
                <FadeIn driver = {driver}>
                    { this.props.getItems( this.props.narrative ) }
                    <View>{ item }</View>
                </FadeIn>
            </View>
        );
    }
}

Partial.PropTypes = {
    narrative: PropTypes.object.isRequired,
    onLeftButtonPress: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
    onRightButtonPress: PropTypes.func.isRequired
}