import styles from '../config/styles';

const button = styles.button;

const Button = ( props ) => {
    return (
        <View style = { button.background }>
            <TouchableHighlight onPress = {() => props.onButtonPress( props.narrative )}>
                <Text style = { button.text }>{ props.buttonTitle }</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Button;