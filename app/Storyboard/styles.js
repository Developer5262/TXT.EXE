import { font, colors, images } from '../config'

const styles = {
    button: {
        text: {
            color: colors.text,
            fontFamily: font.story,

            fontSize: 20
        },
        background: {
            borderRadius: 3,
            borderWidth: 3,
            borderColor: colors.text,
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    overlay: {
        backgroundColor: colors.overlay,
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        
    },
    button_container: {
        flex: 1,
        flexDirection: 'column'
    }
}

export default styles