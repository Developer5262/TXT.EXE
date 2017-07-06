import { colors, font } from '../config'

const styles = {
    button: {
        text: {
            color: colors.title,
            fontSize: 30,
            fontFamily: font.title
        },
        background: {
            borderRadius: 31,
            borderWidth: 3,
            borderColor: colors.title,
            paddingVertical: 10,
            paddingHorizontal: 70,
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    container: {
        backgroundColor: colors.home,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: colors.title,
        fontSize: 72,
        fontFamily: font.title,
        paddingVertical: 15
    }
}

export default styles;