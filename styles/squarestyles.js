import { StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    square: {
        fontWeight: 'bold',
        lineHeight: (Dimensions.get('window').height*0.4)/3,
        height: (Dimensions.get('window').height*0.4)/3,
        marginRight: -1,
        marginTop: -1,
        padding: 0,
        width: (Dimensions.get('window').width-20)/3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleType1 : {
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderStyle: 'solid',
    },
    styleType2: {
        borderBottomWidth : 4,
        borderStyle: 'solid',
    },
    styleType3: {
        borderRightWidth : 4,
        borderStyle: 'solid',
    },
    styleType4: {
        borderWidth : 0
    },
    backGroundWhite: {
        backgroundColor: '#fff',
    },
    backGroundBlack: {
        backgroundColor: '#000',
    },
    textBlack : {
        fontSize: 20,
        color : '#000',
        textAlign: 'center',
    },
    textWhite : {
        fontSize: 20,
        color : '#fff',
        textAlign: 'center',
    }
  });