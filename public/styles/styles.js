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
        height: windowHeight - 200
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
    text: {
        color: '#fff',
        fontSize: 20
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
        top: 100,
        left: 18,
        width: 50,
        height: 50

    }
});
