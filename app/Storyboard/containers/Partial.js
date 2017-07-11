import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import styles from '../config/styles';
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
                    <View style = { styles.button.disabled.background }>
                        <TouchableWithoutFeedback>
                            <Text style = { styles.button.disabled.text }>{ this.props.leftButtonTitle }</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style = { styles.button.disabled.background }>
                        <TouchableWithoutFeedback>
                            <Text style = { styles.button.disabled.text }>{ this.props.rightButtonTitle }</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            );
        } else {
            item = (
                <View style = { styles.container.button }>
                    <View style = { styles.button.background }>
                        <TouchableHighlight onPress = {() => this.props.onLeftButtonPress(choice1_runtogetbags_post_choice2)}>
                            <Text style = { styles.button.text }>{ this.props.leftButtonTitle }</Text>
                        </TouchableHighlight>
                    </View>

                    <View style = { styles.button.background }>
                        <TouchableHighlight onPress = { this.props.onRightButtonPress }>
                            <Text style = { styles.button.text }>{ this.props.rightButtonTitle }</Text>
                        </TouchableHighlight>
                    </View>
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