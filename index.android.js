import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, {Component} from 'react'
import App from './app/index'

class NativeBaseDemo extends Component {
    render() {
        return (
            <App />
        )
    }
}
AppRegistry.registerComponent('NativeBaseDemo', () => NativeBaseDemo);
