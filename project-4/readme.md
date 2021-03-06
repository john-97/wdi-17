# Chattie (A Mobile Chat Application)
#### A Mobile Chat Application (using React-Native)

---

### Overview
A Mobile Chat Application using a Node.js server with Postgresql Database. The Capstone Project for my General Assembly Web Development Immersive Programme, I found myself using much of what I have learnt with a mixture of Technologies to make an intuitively simple and yet considerably complex mobile application. Lets take a dive a little deeper into the App shall we???

<p align="center">
  <img src="https://i.imgur.com/mac8W5S.png?1" width="350" title="hover text">
</p>

---

### Technologies
#### Front-End 
* React-Native & React-Navigation
* Redux, Moment.js & Android contacts
#### Back-End
* Node.js
* Postgresql
* socket.IO

---

### Installation (For Opening in Android)
#### Front-End Set Up
* **Downloading the Application** 
```git clone https://github.com/john-97/wdi-17.git```
* **Downloading Android Studio** 
This shouldnt be tough following the instructions at this Web Page, under the tab **Building Projects with Native Code**: https://facebook.github.io/react-native/docs/getting-started 
* **Opening AVD(Android Virtual Device)** 
open Android Studio, click on the **configure** button, open **AVD Manager**, start AVD by clicking the Play button.
* **Changing Android Configuration** 
Go into the root of the cloned folder before doing the following:
```
cd project-4/client
nano package.json
// change the scripts.start string's first "export PATH command" to your Android sdk's path
cd project-4/client/android
nano local.properties
// change the sdk.dir variable to your Android sdk's path
```
* **Starting Front-End Development Server** 
Go into the root of the cloned folder before doing the following:
```
cd project-4/client
npm install -g react-native-cli
npm install
react-native unlink react-native-contacts
react-native unlink react-native-gesture-handler
react-native link
npm run start
```
#### Back-End Set Up
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
CREATE DATABASE chattie;
\quit

// Setting up dummy data
cd project-4/server/dummy
psql -U {YOUR USERNAME} -d chattie -f tables.sql
psql -U {YOUR USERNAME} -d chattie -f seed.sql

// Config in db.js
cd project-4/server/
nano db.js
change configs.user to {YOUR USERNAME}
```

* **Starting Backend Server**
Go into the root of the cloned folder before doing the following:
```
cd project-4/server
npm install --save-dev nodemon
npm install
nodemon
```

---

### Other Projects
* **[Personal Webpage](https://jonathanchowjh.com)**
* **[LinkedUp](https://github.com/john-97/wdi-17/tree/master/project-2)**

---

### About Me
You can find my personal webpage at [jonathanchowjh.com](https://jonathanchowjh.com) and my Resume at [jonathanchowjh.com/resume](https://jonathanchowjh.com/resume). If you have any questions, please do not hesitate to contact me at +65 938 57577 or at jonathanchowjh@gmail.com.

#### Links
* **[Personal Webpage](https://jonathanchowjh.com)**
* **[LinkedIn](www.linkedin.com/in/jonathan-chow-558121155/)**
* **[GA profile](http://profiles.generalassemb.ly/jonathan-chow)**
* **[github](github.com/john-97 )**

GitHub: github.com/john-97 
GA profile: http://profiles.generalassemb.ly/jonathan-chow 
Personal Website: jonathanchowjh.com
LinkedIn: www.linkedin.com/in/jonathan-chow-558121155/ 