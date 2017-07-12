import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
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
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }

    disableButton = () => {
        this.setState({ clicked: true })
    }

    render() {
        var item;
        if (this.state.clicked) {
            item = (
                <View style = { styles.container.button }>
                    <DisabledButton buttonTitle = { this.props.leftButtonTitle }/>
                    <DisabledButton buttonTitle = { this.props.rightButtonTitle }/>
                </View>
            );
        } else {
            item = (
                <View style = { styles.container.button }>
                    <Button
                        leftButtonTitle = { this.props.leftButtonTitle }
                        onButtonPress = { this.props.onLeftButtonPress }
                        narrative = { this.props.narrative }/>
                    <Button
                        leftButtonTitle = { this.props.rightButtonTitle }
                        onButtonPress = { this.props.onRightButtonPress }
                        narrative = { this.props.narrative }/>
                </View>
            );
        }
        return (
            <View style = { styles.container.text }>
                { this.props.getItems( this.props.narrative ) }
                <View>{item}</View>
            </View>
        );
    }
}

Partial.PropTypes = {
    narrative: PropTypes.object.isRequired,
    onLeftButtonPress: PropTypes.func.isRequired,
    onRightButtonPress: PropTypes.func.isRequired,
    leftButtonTitle: PropTypes.string.isRequired,
    rightButtonTitle: PropTypes.string.isRequired
}