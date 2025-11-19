import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CLSStyles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth,
        height: windowHeight
    },
});

export const ListStyle = StyleSheet.create({
    list: {
        width: windowWidth - 100,
        height: windowHeight - 200,
        gap: 10,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: "#303030",
        borderRadius: 10,
        padding: 15
    },
    iniitem: {
        display: 'flex',
        gap: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: "#043c6e",
        borderRadius: 10,
        padding: 15
    },
    imgItem: {
        width: 70,
        height: 70,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#88e23b'
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        height: 50,
        marginTop: 20,
        color:'#fff',
        borderRadius: 20,
        borderWidth: 3,
        borderColor:'#043c6e',
        backgroundColor: '#6292bbff'
    }
});
    
export const CDSStyles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth,
        height: windowHeight,
        position: 'relative'
    },
    btn: {
        position: 'absolute',
        backgroundColor: '#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding: 3,
        borderRadius: 5,
        top: 100,
        left: 18,
        width: 50,
        height: 50

    }
});
