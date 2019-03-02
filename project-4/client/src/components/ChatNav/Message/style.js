import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    body:{
        flex: 1
    },
    header:{
        flex: 0.2
    },
    messageBody: {
        flex: 2,
        backgroundColor: "rgb(240, 253, 244)"
    },
    // message header
    headerBody:{
        flex: 1,
        backgroundColor: "rgb(195, 195, 195)",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    //message input
    messageInput:{
        flex: 0.15,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgb(61, 206, 109)"
    },

    // message bubble
    balloon: {
        // maxWidth: 250,
        // paddingHorizontal: 15,
        paddingTop: 10,
        paddingLeft: 20,
        borderRadius: 20,
     },
})