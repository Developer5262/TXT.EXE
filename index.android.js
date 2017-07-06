import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, {Component} from 'react'
import Storyboard from './app/Storyboard/Storyboard'

class NativeBaseDemo extends Component {
    render() {
        return (
            <Storyboard />
        )
    }
}
AppRegistry.registerComponent('NativeBaseDemo', () => NativeBaseDemo);
