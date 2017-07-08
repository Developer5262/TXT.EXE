import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View
} from 'react-native';
import { 
    choice1_runtogetbags_post_choice2
} from '../story/chapterone'
import styles from '../config/styles';

export default class NarrativeContainer extends Component {
    getItems = ( elements ) => {
        return elements.map((data) => {
            return (
                <View>
                    <Text style = { styles.text }>{data}</Text>
                </View>
            )
        })
    }
    
    render() {
        return (
            <View style = { styles.container.text }>
                { this.getItems( choice1_runtogetbags_post_choice2 ) }
            </View>
        );
    }
}

NarrativeContainer.PropTypes = {
    
}