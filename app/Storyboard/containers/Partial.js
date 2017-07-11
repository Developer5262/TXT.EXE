import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Button
} from 'react-native';
import styles from '../config/styles';
import PropTypes from 'prop-types';

export default class Partial extends Component {
    constructor(props){
        super(props)
        this.state = {
            rightClicked: false,
            leftClicked: false
        }
    }

    render() {
        return (
            <View style = { styles.container.text }>
                { this.props.getItems( this.props.narrative ) }
                
                <View style = { styles.container.button }>
                    <View style = { styles.button.background }>
                        <TouchableHighlight onPress = { this.props.onLeftButtonPress }>
                            <Text style = { styles.button.text }>{ this.props.leftButtonTitle }</Text>
                        </TouchableHighlight>
                    </View>

                    <View style = { styles.button.background }>
                        <TouchableHighlight onPress = { this.props.onRightButtonPress }>
                            <Text style = { styles.button.text }>{ this.props.rightButtonTitle }</Text>
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
    onRightButtonPress: PropTypes.func.isRequired,
    leftButtonTitle: PropTypes.string.isRequired,
    rightButtonTitle: PropTypes.string.isRequired
}