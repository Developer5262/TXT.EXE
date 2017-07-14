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
                        key = 'Home'
                        component = {Home}
                        title = 'Home'
                        initial />
                    <Scene
                        key = 'Storyboard'
                        component = {Storyboard}
                        title = 'Storyboard' />
                </Scene>
            </Router>
        );
    }
}