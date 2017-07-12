import React, { Component } from 'react';
import {
    Text,
<<<<<<< HEAD
    View
=======
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity
>>>>>>> 239ed512aa56be51856b97b26607e3436f2eeaf7
} from 'react-native';

import styles from '../config/styles';
import Button from '../components/Button';
import DisabledButton from '../components/DisabledButton';
import PropTypes from 'prop-types';

import { 
    choice1_runtogetbags_post_choice2,
    intro
} from '../story/chapterone'
<<<<<<< HEAD

export default class Partial extends Component {
=======

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

>>>>>>> 239ed512aa56be51856b97b26607e3436f2eeaf7
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
<<<<<<< HEAD
                <View style = { styles.container.button }>
                    <Button
                        buttonTitle = { this.props.narrative.decisions[0] }
                        onButtonPress = { () => this.props.onLeftButtonPress(this.props.narrative.outcomes[0]) } />
                    <Button
                        buttonTitle = { this.props.narrative.decisions[1] }
                        onButtonPress = { this.props.onRightButtonPress } />
                </View>
=======
                <View>{item}</View>
>>>>>>> 239ed512aa56be51856b97b26607e3436f2eeaf7
            </View>
        );
    }
}

Partial.PropTypes = {
    narrative: PropTypes.object.isRequired,
    onLeftButtonPress: PropTypes.func.isRequired,
    onRightButtonPress: PropTypes.func.isRequired,
}