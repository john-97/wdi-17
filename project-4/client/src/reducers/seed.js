const seed = {
    user: {
        id: 2, username: "johnny"
    },
    chats: [
        {
            name: 'Eggie',
            users: [{id: 1, name: "Eggie"}, {id: 2, name: "johnny"}],
            lastMessage: "2019-02-26T02:41:41.124Z",
            chatHistory: [
                {id: 1, message: "HI", timestamp: "2019-02-26T02:42:41.124Z", user: 1},
                {id: 2, message: "HEYA!!!", timestamp: "2019-02-26T02:41:41.124Z", user: 2}
            ]
        },
        {
            name: 'Group A Chats',
            users: [{id: 1, name: "Eggie"}, {id: 2, name: "johnny"}, {id: 3, name: "baby"}],
            lastMessage: "2019-03-26T02:41:41.124Z",
            chatHistory: [
                {id: 3, message: "HI", timestamp: "2019-02-26T02:42:41.124Z", user: 1},
                {id: 4, message: "HEYA!!!", timestamp: "2019-02-26T02:41:41.124Z", user: 2},
                {id: 5, message: "HEYA!!!", timestamp: "2019-03-26T02:41:41.124Z", user: 3}
            ]
        }
    ]
}
export default seed