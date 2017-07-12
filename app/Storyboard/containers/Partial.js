import React, { Component } from 'react';
import {
    Text,
    View
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
    render() {
        return (
            <View style = { styles.container.text }>
                { this.props.getItems( this.props.narrative ) }
                <View style = { styles.container.button }>
                    <Button
                        buttonTitle = { this.props.narrative.decisions[0] }
                        onButtonPress = { () => this.props.onLeftButtonPress(this.props.narrative.outcomes[0]) } />
                    <Button
                        buttonTitle = { this.props.narrative.decisions[1] }
                        onButtonPress = { this.props.onRightButtonPress } />
                </View>
            </View>
        );
    }
}

Partial.PropTypes = {
    narrative: PropTypes.object.isRequired,
    onLeftButtonPress: PropTypes.func.isRequired,
    onRightButtonPress: PropTypes.func.isRequired,
}