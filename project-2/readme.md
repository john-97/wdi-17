
# LinkedUp
#### Social Media/ Hiring Web-Platform

---

### Overview
 In search new talent??? LinkedUp is the Social-Media platform for you! that connects employers with potential employees with a quick search!!! It is packed-full with core-functionality like Post Creation, Direct Messaging, Resume Creation, and much, much more…

<p align="center">
  <img src="https://i.imgur.com/UpsNCQR.png?1" width="350" title="hover text">
</p>

---

### Technologies
#### Front-End 
* React.js & react-router-dom
* Redux, Moment.js
#### Back-End
* Node.js
* Postgresql
* socket.IO

---

### Installation
* **Downloading the Application** 
```git clone https://github.com/john-97/wdi-17.git```
* **Starting Front-End Development Server** 
Go into the root of the cloned folder before doing the following:
```
cd project-2/client
npm install
npm run start
```

* **Postgresql Set Up**
Go into the root of the cloned folder before doing the following:
```
// INSTALLING POSTGRESQL APP
// Download and install from http://postgresapp.com/
// Remember to input the correct postgres version in the export PATH
ls -la /Applications/Postgres.app/Contents/Versions
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.5/bin

// Setting up DataBase
psql
/connect {YOUR USERNAME}
CREATE DATABASE linkedup;
\quit

// Setting up dummy data
cd project-2/server/dummy
psql -U {YOUR USERNAME} -d linkedup -f tables.sql
psql -U {YOUR USERNAME} -d linkedup -f seed.sql

// Config in db.js
cd project-4/server/
nano db.js
change configs.user to {YOUR USERNAME}
```
* **Starting Backend Server**
Go into the root of the cloned folder before doing the following:
```
cd project-2/server
npm install --save-dev nodemon
npm install
nodemon
```

---

### Other Projects
* **[Personal Webpage](https://jonathanchowjh.com)**
* **[Chattie](https://github.com/john-97/wdi-17/tree/master/project-4)**

---

### About Me
I have hosted some of my projects at [jonathanchowjh.com](https://jonathanchowjh.com) and my Resume can be found at [jonathanchowjh.com/resume](https://jonathanchowjh.com/resume)


