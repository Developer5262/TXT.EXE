import { font, colors } from '../../config'

const styles = {
    button: {
        text: {
            color: colors.text,
            fontFamily: font.story
        },
        background: {
            paddingVertical: 10,
            width: 350,
            borderRadius: 3,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 3,
            borderColor: colors.text
        },
        disabled: {
            background: {
                backgroundColor: '#ddd',
            },
            text: {
                color: '#fff'
            }
        }
    },
    container: {
        button: {
            marginTop: 20,
            marginBottom: 20
        },
        text: {
            paddingLeft: 20,
            paddingRight: 10,
            paddingVertical: 20,
            alignSelf: 'flex-start'
        },
        screen: {
            flex: 1,
            backgroundColor: 'transparent',
            width: undefined,
            height: undefined,
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: colors.overlay,
        opacity: colors.opacity
    },
    text: {
        fontFamily: font.story, 
        color: colors.text,
        marginVertical: 10,
        fontSize: 20
    }
}

export default styles