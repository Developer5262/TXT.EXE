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
} from '../story/chapterone'

export default class Partial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false
        }
    }
    
    disableButton = () => {
        this.setState({
            disabled: true
        })
    }

    render() {
        var item = !this.state.disabled ? (
            <View style = { styles.container.button }>
                <TouchableOpacity onPress = {() => this.disableButton}>
                    <Button
                        buttonTitle = { this.props.narrative.decisions[0] }
                        onButtonPress = {() => this.props.onLeftButtonPress(choice1_runtogetbags_post_choice2) }/>
                    <Button
                        buttonTitle = { this.props.narrative.decisions[1] }
                        onButtonPress = { this.props.onRightButtonPress } />
                </TouchableOpacity>
            </View>
        ) : <View />
        return (
            <View style = { styles.container.text }>
                { this.props.getItems( this.props.narrative ) }
                <View>{ item }</View>
            </View>
        );
    }
}

Partial.PropTypes = {
    narrative: PropTypes.object.isRequired,
    onLeftButtonPress: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
    onRightButtonPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}