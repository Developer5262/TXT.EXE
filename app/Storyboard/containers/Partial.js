import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from '../config/styles';
import PropTypes from 'prop-types';

export default class Partial extends Component {
    render() {
        const {
            narrative,
            getItems,
            onLeftButtonPress,
            onRightButtonPress,
            leftButtonTitle,
            rightButtonTitle
        } = this.props;

        const container = styles.container;

        const {
            background,
            text
        } = styles.button;

        return (
            <View style = { container.text }>
                { getItems( narrative ) }
                <View style = { container.button }>
                    <View style = { background }>
                        <TouchableHighlight onPress = { onLeftButtonPress.bind(this) }>
                            <Text style = { text }>{ leftButtonTitle }</Text>
                        </TouchableHighlight>
                    </View>
                    <View style = { background }>
                        <TouchableHighlight onPress = { onRightButtonPress.bind(this) }>
                            <Text style = { text }>{ rightButtonTitle }</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

Partial.PropTypes = {
    narrative: PropTypes.object.isRequired,
    onLeftButtonPress: PropTypes.func.isRequired,
    onRightButtonPress: PropTypes.func.isRequired
}