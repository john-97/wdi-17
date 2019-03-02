import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    // main
    header: {
        flex: 0.35,
        flexDirection: "column",
        backgroundColor: "blue"
    },
    chat: {
        flex: 2,
    },
    body: {
        flex: 1, 
        flexDirection: "column"
    },
    // header
    headerbody:{
        flex: 1,
        flexDirection: "column"
    },
    header1:{
        flex: 0.7,
        backgroundColor: "rgb(123, 189, 158)",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header2:{
        flex: 0.4,
        backgroundColor: "rgb(212, 212, 212)",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    // chatlist
    chatlist: {
        flex: 1,
        backgroundColor: "rgb(240, 240, 240)"
    },
    chats: {
        height: 50,
        backgroundColor: "rgb(223, 255, 241)",
        borderStyle: "solid",
        borderColor: "rgb(0,0,0)",
        borderBottomWidth: 0.5
    }

});