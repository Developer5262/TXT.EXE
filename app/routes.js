import React, { Component } from 'react';

import {
    Router,
    Scene
} from 'react-native-router-flux';

import Home from './Home/Home';
import Storyboard from './Storyboard/Storyboard';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key = "root">
                    <Scene
                        key = "home"
                        component = {Home}
                        hideNavBar
                        initial />
                    <Scene
                        key = "storyboard"
                        component = {Storyboard}
                        hideNavBar />
                </Scene>
            </Router>
        );
    }
}