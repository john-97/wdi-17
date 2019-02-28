# Chattie (A Mobile Chat Application)

### Installation (For Opening in Android)
#### Front-End Set Up
* **Downloading the Application** 
using git clone https://github.com/john-97/wdi-17.git
* **Downloading Android Studio** 
This shouldnt be tough following the instructions at this Web Page: https://facebook.github.io/react-native/docs/getting-started 
* **Opening AVD(Android Virtual Device)** 
open Android Studio, click on the **configure** button, open **AVD Manager**, start AVD by clicking the Play button.
* **Downloading React-Native** ```npm install -g react-native-cli```
* **Starting Front-End Development Server** 
Go into the root of the cloned folder before doing the following:
```
cd project-4/client
npm install
react-native unlink
react-native link
npm run start
```
#### Back-End Set Up
* **Starting Backend**
Go into the root of the cloned folder before doing the following:
```
cd project-4/server
npm install --save-dev nodemon
npm install
nodemon
```
---
### Overview
####A Mobile Chat Application (using React-Native)
---

### Technologies
* **Front-End** Uses React-Native, with React-Navigation, GeoLocation, Redux, Android Contacts and Permissions, and Socket.io.
* **Back-End** Uses Node.js, Postgresql, and socket.IO
* **UX (User Xperience)** 

### Main Features
* **Chat Function** Socket.IO and Socket.IO-Client was used to send information in real-time without any hard reloads or distinct AJAX request, which is pivotal in a chat-application
* **Implement thoughtful user stories** 
* **Be deployed online** so it's publicly accessible

---

### Necessary Deliverables

* A **working app**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the very beginning of the project
* **A ``README.md`` file** with:
    * An embedded screenshot of the app
    * Explanations of the **technologies** used
    * A couple paragraphs about the **general approach you took**
    * **Installation instructions** for any dependencies
    * Link to your **user stories** – who are your users, what do they want, and why?
    * Link to your **wireframes** – sketches of major views / interfaces in your application
    * Link to your **pitch deck** – documentation of your wireframes, user stories, and proposed architecture
    * Descriptions of any **unsolved problems** or **major hurdles** you had to overcome

---

### Suggested Ways to Get Started

* **Don’t get too caught up in too many awesome features** – simple is always better. Build something impressive that does one thing well.
* **Design first.** Planning with user stories & wireframes before writing code means you won't get distracted changing your mind – you'll know what to build, and you can spend your time wisely by just building it.
* **Don’t hesitate to write throwaway code** to solve short term problems.
* **Read the docs for whatever technologies / frameworks / API’s you use**.
* **Write your code DRY** and **build your APIs RESTful**.
* **Be consistent with your code style.** You're working in teams, but you're only making one app per team. Make sure it looks like a unified effort.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Keep user stories small and well-defined**, and remember – user stories focus on what a user needs, not what development tasks need accomplishing.
* **Write code another developer wouldn't have to ask you about**. Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is?
* **Make it all well-formatted.** Are you indenting, consistently? Can we find the start and end of every div, curly brace, etc?
* **Comment your code.** Will someone understand what is going on in each block or function? Even if it's obvious, explaining the what & why means someone else can pick it up and get it.
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps.

---

### Resources

* **[HackDesign](https://hackdesign.org/lessons)** _(beginner's reference for thinking like a designer)_
* **[Visual Design Hacking](https://generalassemb.ly/online/videos/visual-design-hacking)** _(a great tips-and-tricks focused video from Front Row)_
* **[Web Design For Non-designers](https://generalassemb.ly/online/videos/web-design-for-non-designers)** _(another great design-related course for all the nerds out there)_

---

### Project Feedback + Evaluation
The project should demonstrate that the student is minimally capable of __applying__ the things they saw during their entire time at WDI.

Given __Bloom's Taxonomy__ students should be able to apply their knowledge of web programming using HTML, CSS, javascript and ruby or node.js on the server side. Students must remember enough of the concepts to to understand how to apply their knowledge / build this project.

![https://cft.vanderbilt.edu/wp-content/uploads/sites/59/Blooms-Taxonomy-650x366.jpg](https://cft.vanderbilt.edu/wp-content/uploads/sites/59/Blooms-Taxonomy-650x366.jpg)

