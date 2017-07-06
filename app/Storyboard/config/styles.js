import { font, colors, images } from '../../config'

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
            borderColor: colors.text,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 3
        }
    },
    container: {
        button: {
            marginTop: 20,
            marginBottom: 20
        },
        text: {
            padding: 5
        },
        screen: {
            flex: 1
        }
    },
    overlay: {
        backgroundColor: colors.overlay,
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontFamily: font.story,

    }
}

export default styles