import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    body:{
        flex: 1
    },
    header:{
        flex: 0.1,
        backgroundColor: "rgb(212, 212, 212)"
    },
    contacts:{
        flex: 1.2,
        backgroundColor: "rgb(228, 255, 237)"
    },
    contactList:{
        height: 50,
        backgroundColor: "rgb(134, 134, 134)",
        borderStyle: "solid",
        borderColor: "rgb(0,0,0)",
        borderBottomWidth: 1,
        marginBottom: 1,
    },
    contactListSelected:{
        height: 50,
        backgroundColor: "rgb(95, 121, 103)",
        borderStyle: "solid",
        borderColor: "rgb(0,0,0)",
        borderBottomWidth: 1,
        marginBottom: 1,
    },
    contactListText:{
        fontSize: 20,
        margin: 15
    },
    headerBody:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText:{
        fontSize: 20,
        margin: 10
    }
})