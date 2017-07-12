import styles from '../config/styles'

const disabled = styles.button.disabled;

const DisabledButton = ( props ) => {
    return (
        <View style = { disabled.background }>
            <TouchableWithoutFeedback>
                <Text style = { disabled.text }>{ props.buttonTitle }</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default DisabledButton;