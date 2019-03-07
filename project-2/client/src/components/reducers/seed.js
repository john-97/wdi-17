const seed = {
    test: "test",
    resume: {
        user:{
            name: 'Jonathan',
            email: "jonathanchowjh@gmail.com",
            phoneNumber: 93857577,
            website: "jonathanchowjh.com"
        },
        description:{
            position: "Full Stack Web-Developer",
            description: "A Full-Stack Web Developer who excels at Communication. Prior to taking up computing, I was a Business Student who excelled at both graphical and verbal Communication, often involving myself in activities such as Model United Nations & Speech and Drama, for which I received High Merit in the Grade 5 Trinity Exam. {paragraph} Armed with a holistic skill-set and a learning mentality, I consider myself to be a flexible hire. During my stint at ADBC, I learnt React-Native.js on-the-job as I started my employ as a mobile developer / technical consultant."
        },
        skills: [
            {
                name: "Full-Stack Web Developer",
                description: "(React.js || React-Native.js || Node.js || SQL || Ruby on Rails || AWS)"
            },
            {
                name: "Data Analyst",
                description: "(Python || Django || Data-Wrangling)"
            },
        ],
        professionalExperience: [
            {
                name: "ADBC.PTE.LTD, Singapore",
                position: "MOBILE DEVELOPER and Consultant (January 2019 to Present)",
                description: "Created the an E-Commerce App’s MVP using React-Native and Node.js as part of a Team of Two. Implemented a Paypal Payment System as well as Engaging multiple APIs to for online retail orders."
            }
        ],
        educationAndCredentials: [
            {
                name: "General Assembly (2018 to 2019)",
                description: "Web Development Intensive (Graduating March 2019) {paragraph} Programmed a Fitness Web-App and a dynamic Mobile Application"
            },
            {
                name: "University of Sydney (2016 to 2017)",
                description: "Majored in Accounting and Finance (incomplete)"
            },
            {
                name: "St Joseph Institution International (2014 to 2015)",
                description: "International Baccalaureatte (37 points) {paragraph} Venture Scouts (Founding Chairman)"
            },
            {
                name: "St Joseph Institution International (2014 to 2015)",
                description: ""
            }
        ],
        others: [
            {
                name: "Trinity College Communication Skills Grade 5 High Merit"
            },
            {
                name:  "Trinity College Speech and Drama Grade 5 High Merit"
            }
        ]
    },
    user: {
        name: 'jon',
        profile_pic: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
        user_id: 1,
        friends: [
            {
                user_id: 2, 
                chat_id: 3,
                name: 'Jave',
                profile_pic: 'https://i9.dainikbhaskar.com/thumbnails/680x588/web2images/english.fashion101.in/2016/05/31/001ranveer_1464693862.jpg',
            },
            {
                user_id: 3, 
                chat_id: 2,
                name: 'Sabrina',
                profile_pic: 'http://static.sites.yp.com/var/m_6/69/69a/11172164/452547-537599819.jpg',
            },
            {
                user_id: 4,
                chat_id: 4,
                name: 'Jace',
                profile_pic: 'https://everydayfeminism.com/wp-content/uploads/2016/07/men-300x200.jpg',
            },
        ]
    },
    newsfeed: [
        {
            content: 'happy honika',
            post_id: 1,
            user_id: 1,
            likes: [1,2,3],
            timestamp: '2019-03-02T09:30:31.103Z'
        },
        {
            content: 'second Post on LINKED UP!!!!!',
            user_id: 1,
            post_id: 2,
            likes: [2,3],
            timestamp: '2019-03-02T09:30:43.249Z'
        },
        {
            content: 'haha JAVE here on LINKED UP!!!!!',
            user_id: 2,
            post_id: 3,
            likes: [2,3],
            timestamp: '2019-03-02T09:36:03.356Z'
        },
        {
            content: 'haha JACE here on LINKED UP!!!!!',
            user_id: 4,
            post_id: 4,
            likes: [1,2,3],
            timestamp: '2019-03-02T09:36:05.028Z'
        },
        {
            content: 'haha Sabrina here on LINKED UP!!!!!',
            user_id: 3,
            post_id: 5,
            likes: [1,2,3],
            timestamp: '2019-03-02T09:36:05.980Z'
        }
    ],
    profile:{ 
        1:[
            {
                content: 'happy honika',
                post_id: 1,
                user_id: 1,
                likes: [1,2,3],
                timestamp: '2019-03-02T09:30:31.103Z'
            },
            {
                content: 'second Post on LINKED UP!!!!!',
                user_id: 1,
                post_id: 2,
                likes: [2,3],
                timestamp: '2019-03-02T09:30:43.249Z'
            }
        ],
        2:[
            {
                content: 'haha JAVE here on LINKED UP!!!!!',
                user_id: 2,
                post_id: 3,
                likes: [2,3],
                timestamp: '2019-03-02T09:36:03.356Z'
            }
        ],
        4:[
            {
                content: 'haha JACE here on LINKED UP!!!!!',
                user_id: 4,
                post_id: 4,
                likes: [1,2,3],
                timestamp: '2019-03-02T09:36:05.028Z'
            }
        ],
        3: [
            {
                content: 'haha Sabrina here on LINKED UP!!!!!',
                user_id: 3,
                post_id: 5,
                likes: [1,2,3],
                timestamp: '2019-03-02T09:36:05.980Z'
            }
        ]
    },
    chats: [
        {
            chat_id: 1,
            chat_picture: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            chat_name: 'GROUP AWESOME',
            chat_members_id: [1,2,3],
            messages: [
                {message: 'hey dude', message_id: 1, user_id: 1, timestamp: '2019-03-02T09:39:01.283Z' },
                {message: 'hey dude', message_id: 2, user_id: 3, timestamp: '2019-03-02T09:39:22.886Z' },
                {message: 'hey dude', message_id: 3, user_id: 2, timestamp: '2019-03-02T09:39:23.748Z' }
            ]
        },
        {
            chat_id: 2,
            chat_picture: 'https://i.pinimg.com/originals/94/9d/da/949dda0430ff34d83fe24499d3f9f20d.jpg',
            chat_name: 'Sabrina',
            chat_members_id: [1,3],
            messages: [
                {message: 'hey dude', message_id: 1, user_id: 1, timestamp: '2019-03-02T09:39:01.283Z' },
                {message: 'hey dude', message_id: 2, user_id: 2, timestamp: '2019-03-02T09:39:22.886Z' },
                {message: 'hey dude', message_id: 3, user_id: 2, timestamp: '2019-03-02T09:39:23.748Z' }
            ]
        },
        {
            chat_id: 3,
            chat_picture: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            chat_name: 'Jave',
            chat_members_id: [1,2],
            messages: [
                {message: 'hey dude', message_id: 1, user_id: 1, timestamp: '2019-03-02T09:39:01.283Z' },
                {message: 'hey dude', message_id: 2, user_id: 3, timestamp: '2019-03-02T09:39:22.886Z' },
                {message: 'hey dude', message_id: 3, user_id: 2, timestamp: '2019-03-02T09:39:23.748Z' }
            ]
        },
        {
            chat_id: 4,
            chat_picture: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            chat_name: 'Jace',
            chat_members_id: [1,4],
            messages: [
                {message: 'hey dude', message_id: 1, user_id: 1, timestamp: '2019-03-02T09:39:01.283Z' },
                {message: 'hey dude', message_id: 2, user_id: 3, timestamp: '2019-03-02T09:39:22.886Z' },
                {message: 'hey dude', message_id: 3, user_id: 2, timestamp: '2019-03-02T09:39:23.748Z' }
            ]
        }
    ]
}
export default seed