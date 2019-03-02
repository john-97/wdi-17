import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: "rgb(143, 224, 132)"
    },
    header:{
        flex: 0.4,
        alignContent: "center"
    },
    headerIcon: {
        fontSize: 40,
        textAlign: "center",
        marginTop: 10
    },
    input:{
        height: 40,
        paddingLeft: 6,
        borderBottomWidth: 2,
        borderBottomColor: "rgb(10, 71, 43)",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10
    },
    placeholder:{
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30
    },
    button:{
        width: 100,
        height: 50,
        backgroundColor: "rgb(22, 54, 21)",
        marginLeft: 30,
        borderRadius: 30
    },
    buttonText:{
        marginTop: 10,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "900",
        color: "white"

    }
})