import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    status: {
        flex:2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    board: {
        flex:6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square : {
        display: 'flex',
        flexDirection: 'row',
        marginLeft:10,
        marginRight:10,
    },
    setUpPlayerModal : {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',   
    },
    restart : {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',   
    }
});
