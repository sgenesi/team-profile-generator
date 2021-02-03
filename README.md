# Team-Profile-Generator

The Team Profile Generator is a CLI application that generates an HTML file of your team members that is website ready.

Table of Contents
* [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
*[Built With](#built-with)
*[Key Features](#key-features)
*[Links](#links)
*[Images](#images)

---
## User Story and Acceptance Criteria


### User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
```
```
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
```
```
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
```
```
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
```
```
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
```
```
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
```
```
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

---
## Built With
* Jest
* Node.js
* JavaScript
* HTML
* CSS

---
## Key Features
* Runs in Node.js  
* Uses Inquirer package
* Uses Jest package for testing
* Requests information from a user and then generates an HTML file displaying the information

---
## Links
* Walkthrough Video: https://drive.google.com/file/d/1vBzuVjCFRpLHs6ObPsp61M1BiWAWUUFU/view?usp=sharing 
* GitHub Repo: https://github.com/sgenesi/team-profile-generator

---
## Images

### Passed Tests 

![image](https://user-images.githubusercontent.com/71858457/106820095-06031880-6638-11eb-81f6-747519038998.png)

### Desktop View

1440px X 1112px

![image](https://user-images.githubusercontent.com/71858457/106820134-12877100-6638-11eb-9fd9-156ef4252576.png)

### iPad View

768px X 1024px

![image](https://user-images.githubusercontent.com/71858457/106820229-38147a80-6638-11eb-9d7f-1f215f97376f.png)

### iPhone 6 View

375px X 667px

![image](https://user-images.githubusercontent.com/71858457/106820175-203cf680-6638-11eb-9331-895d74c015a3.png)

![image](https://user-images.githubusercontent.com/71858457/106820206-2c28b880-6638-11eb-9ac1-970bf09b8e54.png)