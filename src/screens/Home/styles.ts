import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        flex: 1,
        width: '100%'
    },
    containerInputs: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3E54AC',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    input: {
        width: 280,
        height: 45,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        color: '#FFFFFF'
    },
    button: {
        width: 280,
        height: 45,
        borderWidth: 1,
        backgroundColor: '#16FF00',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    labelButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
})