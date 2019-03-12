DROP TABLE users;
DROP TABLE usersRT;
DROP TABLE newsfeed;
DROP TABLE newsfeedLikes;
DROP TABLE chats;
DROP TABLE chatMembers;
DROP TABLE messages;
DROP TABLE resume;
DROP TABLE resumeSkills;
DROP TABLE resumeProfessionalExperience;
DROP TABLE resumeEducationAndCredentials;
DROP TABLE resumeOthers;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    profile_pic varchar (255) NOT NULL,
    password TEXT NOT NULL,
    online_status BOOLEAN NOT NULL
);
CREATE TABLE IF NOT EXISTS usersRT (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    friend_id INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS newsfeed (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    timestamp TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS newsfeedLikes (
    id SERIAL NOT NULL PRIMARY KEY,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
);



CREATE TABLE IF NOT EXISTS chats (
    id SERIAL NOT NULL PRIMARY KEY,
    chat_picture TEXT NOT NULL,
    chat_name TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS chatMembers (
    id SERIAL NOT NULL PRIMARY KEY,
    chat_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL NOT NULL PRIMARY KEY,
    message TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    chat_id INTEGER NOT NULL,
    timestamp TEXT NOT NULL
);



CREATE TABLE IF NOT EXISTS resume (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    phoneNumber INTEGER NOT NULL,
    website TEXT NOT NULL,
    email TEXT NOT NULL,
    position TEXT NOT NULL,
    description TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS resumeSkills (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS resumeProfessionalExperience (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    description TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS resumeEducationAndCredentials (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS resumeOthers (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL
);
