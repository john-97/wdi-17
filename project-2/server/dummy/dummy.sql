
-- users
INSERT INTO users (name, profile_pic, password, online_status) VALUES ( 'jon', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg', '1111', true);
INSERT INTO users (name, profile_pic, password, online_status) VALUES ( 'sab', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg', '1111', true);
INSERT INTO users (name, profile_pic, password, online_status) VALUES ( 'dan', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg', '1111', true);
INSERT INTO users (name, profile_pic, password, online_status) VALUES ( 'ken', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg', '1111', true);
INSERT INTO users (name, profile_pic, password, online_status) VALUES ( 'ben', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg', '1111', true);


-- usersRT
INSERT INTO usersRT (user_id, friend_id) VALUES (1,2);
INSERT INTO usersRT (user_id, friend_id) VALUES (1,3);
INSERT INTO usersRT (user_id, friend_id) VALUES (1,4);
INSERT INTO usersRT (user_id, friend_id) VALUES (1,5);
INSERT INTO usersRT (user_id, friend_id) VALUES (2,3);
INSERT INTO usersRT (user_id, friend_id) VALUES (2,4);
INSERT INTO usersRT (user_id, friend_id) VALUES (2,5);
INSERT INTO usersRT (user_id, friend_id) VALUES (3,4);
INSERT INTO usersRT (user_id, friend_id) VALUES (3,5);
INSERT INTO usersRT (user_id, friend_id) VALUES (4,5);


-- newsfeed
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (1, 'hey guys Loving sans', '2019-03-10T07:09:24.639Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (1, 'I cant believe this!!!', '2019-03-10T07:10:24.242Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (1, 'IT IS WINTER!', '2019-03-10T07:14:33.348Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (1, 'I wanna be a snowman', '2019-03-10T07:14:44.115Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (1, 'Come on lets go and play', '2019-03-10T07:14:50.031Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (2, 'Let it go? again?', '2019-03-10T07:14:56.462Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (1, 'DEFS!!!!', '2019-03-10T07:15:04.741Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (3, 'LOVELY WEATHER!', '2019-03-10T07:15:11.713Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (4, 'car broke down :(', '2019-03-10T07:15:20.127Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (5, 'NOOOOOOOO', '2019-03-10T07:15:26.120Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (3, 'Haiz.... the wind will kill us', '2019-03-10T07:15:32.350Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (1, 'Earthquake!!!', '2019-03-10T07:15:42.251Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (2, 'OMG WHAT HAPPENED', '2019-03-10T07:15:50.205Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (1, 'Road closure on the W1', '2019-03-10T07:15:56.278Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (4, 'Tornado', '2019-03-10T07:16:03.668Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (5, 'Marshmello', '2019-03-10T07:16:10.356Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (3, 'Marshie', '2019-03-10T07:16:15.900Z');
INSERT INTO newsfeed (user_id, content, timestamp) VALUES (2, 'YEssss.', '2019-03-10T07:16:22.357Z');


-- newsfeedLikes
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (1, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (1, 2);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (1, 3);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (1, 4);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (1, 5);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (2, 5);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (2, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (3, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (4, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (5, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (6, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (7, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (8, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (9, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (10, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (11, 1);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (11, 2);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (13, 2);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (14, 2);
INSERT INTO newsfeedLikes (post_id, user_id) VALUES (15, 2);

-- chats
INSERT INTO chats (chat_name, chat_picture) VALUES ('The 3 brothers', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg');
INSERT INTO chats (chat_name, chat_picture) VALUES ('Work Group', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg');
INSERT INTO chats (chat_name, chat_picture) VALUES ('Ken', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg');
INSERT INTO chats (chat_name, chat_picture) VALUES ('sab', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg');
INSERT INTO chats (chat_name, chat_picture) VALUES ('dan', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg');
INSERT INTO chats (chat_name, chat_picture) VALUES ('ben', 'http://baypoint.academy/wp-content/uploads/2017/01/dummy-profile-pic-300x300.jpg');


-- messages
INSERT INTO chatMembers (chat_id, user_id) VALUES (1, 1);
INSERT INTO chatMembers (chat_id, user_id) VALUES (1, 2);
INSERT INTO chatMembers (chat_id, user_id) VALUES (1, 3);
INSERT INTO chatMembers (chat_id, user_id) VALUES (2, 1);
INSERT INTO chatMembers (chat_id, user_id) VALUES (2, 2);
INSERT INTO chatMembers (chat_id, user_id) VALUES (2, 3);
INSERT INTO chatMembers (chat_id, user_id) VALUES (2, 4);
INSERT INTO chatMembers (chat_id, user_id) VALUES (2, 5);
INSERT INTO chatMembers (chat_id, user_id) VALUES (4, 2);
INSERT INTO chatMembers (chat_id, user_id) VALUES (4, 1);
INSERT INTO chatMembers (chat_id, user_id) VALUES (5, 1);
INSERT INTO chatMembers (chat_id, user_id) VALUES (5, 3);
INSERT INTO chatMembers (chat_id, user_id) VALUES (6, 1);
INSERT INTO chatMembers (chat_id, user_id) VALUES (6, 5);
INSERT INTO chatMembers (chat_id, user_id) VALUES (3, 1);
INSERT INTO chatMembers (chat_id, user_id) VALUES (3, 4);


INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('Hey there Im new', 1, 2, '2019-03-10T07:27:32.632Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('Hey', 2, 1, '2019-03-10T07:35:15.488Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('Yeps Hi here', 3, 2, '2019-03-10T07:42:04.303Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('some message', 4, 2, '2019-03-10T07:42:11.345Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('really', 5, 2, '2019-03-10T07:42:18.026Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('new message', 1, 1, '2019-03-10T07:42:28.705Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('placeholder', 2, 1, '2019-03-10T07:42:39.829Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('nice!!!', 3, 1, '2019-03-10T07:42:48.263Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('sure thing', 1, 3, '2019-03-10T07:42:55.411Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('get it done dude', 4, 3, '2019-03-10T07:43:02.947Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('by the dateline?', 1, 4, '2019-03-10T07:43:08.965Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('is it impossible', 2, 4, '2019-03-10T07:43:16.702Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('not really', 1, 5, '2019-03-10T07:43:22.615Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('I love linked up!', 3, 5, '2019-03-10T07:43:29.869Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('yeah its awesome', 1, 6, '2019-03-10T07:43:35.513Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('try the new UX', 5, 6, '2019-03-10T07:43:41.913Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('what about your resume', 1, 2, '2019-03-10T07:43:48.739Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('does it show well', 2, 2, '2019-03-10T07:43:54.125Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('really well', 2, 2, '2019-03-10T07:44:06.618Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('how do you stop the thing from weirding out', 1, 1, '2019-03-10T07:44:13.373Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('nothing you can do', 2, 2, '2019-03-10T07:44:19.055Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('resume is awesome', 3, 2, '2019-03-10T07:44:26.171Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('yeah im proud of mine', 4, 2, '2019-03-10T07:44:31.473Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('defs', 5, 2, '2019-03-10T07:44:37.010Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('surething', 2, 2, '2019-03-10T07:44:44.161Z');
INSERT INTO messages (message, user_id, chat_id, timestamp) VALUES ('no worries', 1, 2, '2019-03-10T07:44:49.020Z');


-- resume
INSERT INTO resume (user_id, name, phoneNumber, email, website, position, description) VALUES (1, 'jonathan', 93857577, 'jonathanchowjh@gmail.com', 'jonathanchowjh.com', 'Web / App Developer', 'Awesome Developer');
INSERT INTO resume (user_id, name, phoneNumber, email, website, position, description) VALUES (2, 'sabrina', 93857577, 'jonathanchowjh@gmail.com', 'jonathanchowjh.com', 'Web / App Developer', 'Awesome Developer');
INSERT INTO resume (user_id, name, phoneNumber, email, website, position, description) VALUES (3, 'dan', 93857577, 'jonathanchowjh@gmail.com', 'jonathanchowjh.com', 'Web / App Developer', 'Awesome Developer');
INSERT INTO resume (user_id, name, phoneNumber, email, website, position, description) VALUES (4, 'ken', 93857577, 'jonathanchowjh@gmail.com', 'jonathanchowjh.com', 'Web / App Developer', 'Awesome Developer');
INSERT INTO resume (user_id, name, phoneNumber, email, website, position, description) VALUES (5, 'ben', 93857577, 'jonathanchowjh@gmail.com', 'jonathanchowjh.com', 'Web / App Developer', 'Awesome Developer');


-- resumeSkills
INSERT INTO resumeSkills (user_id, name, description) VALUES (1, 'Front-End Development', 'Awesome Developer');
INSERT INTO resumeSkills (user_id, name, description) VALUES (1, 'second Skill', 'Awesome Developer');
INSERT INTO resumeSkills (user_id, name, description) VALUES (2, 'Front-End Development', 'Awesome Developer');
INSERT INTO resumeSkills (user_id, name, description) VALUES (3, 'Front-End Development', 'Awesome Developer');
INSERT INTO resumeSkills (user_id, name, description) VALUES (4, 'Front-End Development', 'Awesome Developer');
INSERT INTO resumeSkills (user_id, name, description) VALUES (5, 'Front-End Development', 'Awesome Developer');



-- resumeProfessionalExperience
INSERT INTO resumeProfessionalExperience (user_id, name, position, description) VALUES (1, 'ADBC.PTE.LTD', 'APP DEVELOPER', 'Awesome Developer');
INSERT INTO resumeProfessionalExperience (user_id, name, position, description) VALUES (2, 'ADBC.PTE.LTD', 'APP DEVELOPER', 'Awesome Developer');
INSERT INTO resumeProfessionalExperience (user_id, name, position, description) VALUES (3, 'ADBC.PTE.LTD', 'APP DEVELOPER', 'Awesome Developer');
INSERT INTO resumeProfessionalExperience (user_id, name, position, description) VALUES (4, 'ADBC.PTE.LTD', 'APP DEVELOPER', 'Awesome Developer');
INSERT INTO resumeProfessionalExperience (user_id, name, position, description) VALUES (5, 'ADBC.PTE.LTD', 'APP DEVELOPER', 'Awesome Developer');




-- resumeEducationAndCredentials
INSERT INTO resumeEducationAndCredentials (user_id, name, description) VALUES (1, 'SJII', 'AWESOME STUDENT');
INSERT INTO resumeEducationAndCredentials (user_id, name, description) VALUES (2, 'SJII', 'AWESOME STUDENT');
INSERT INTO resumeEducationAndCredentials (user_id, name, description) VALUES (3, 'SJII', 'AWESOME STUDENT');
INSERT INTO resumeEducationAndCredentials (user_id, name, description) VALUES (4, 'SJII', 'AWESOME STUDENT');
INSERT INTO resumeEducationAndCredentials (user_id, name, description) VALUES (5, 'SJII', 'AWESOME STUDENT');



-- resumeOthers
INSERT INTO resumeOthers (user_id, name) VALUES (1, 'TRINITY GUILDHALL SPEECH AND DRAMA');
INSERT INTO resumeOthers (user_id, name) VALUES (2, 'TRINITY GUILDHALL SPEECH AND DRAMA');
INSERT INTO resumeOthers (user_id, name) VALUES (3, 'TRINITY GUILDHALL SPEECH AND DRAMA');
INSERT INTO resumeOthers (user_id, name) VALUES (4, 'TRINITY GUILDHALL SPEECH AND DRAMA');
INSERT INTO resumeOthers (user_id, name) VALUES (5, 'TRINITY GUILDHALL SPEECH AND DRAMA');

