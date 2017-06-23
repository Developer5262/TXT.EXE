import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import React, {Component} from 'react'
 
import Home from './app/Home/Home.js'

class NativeBaseDemo extends Component {
    render() {
        return (
            <Home />
        )
    }
}

AppRegistry.registerComponent('NativeBaseDemo', () => NativeBaseDemo);
