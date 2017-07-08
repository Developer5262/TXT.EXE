import React, {Component} from 'react';
import { 
    Text, 
    View,
    Image,
    ScrollView 
} from 'react-native';
import styles from './config/styles'
import Button from './Button'
import images from './images/images';
import NarrativeContainer from './containers/NarrativeContainer';

export default class Storyboard extends Component {
    render() {
        return (   
            <Image
                source = {require('./images/airportterminal.jpg')} 
                style = { styles.container.screen }>
                <View style = { styles.overlay }>
                    <ScrollView>
                        <NarrativeContainer />
                    </ScrollView>
                </View>
            </Image>
        );
    }
}