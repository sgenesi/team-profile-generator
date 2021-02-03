const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office number";
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers"
            }])
                .then(function ({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newMember);
                    addHtml(newMember)
                        .then(function () {
                            if (moreMembers === "yes") {
                                addMember();
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}
function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <style>
            body { margin-bottom: 2em; }
            .card { margin-bottom: 2em; }
        </style>
    </head>
    <body>
    <div class="jumbotron p-3 mb-2 bg-danger text-white text-center">
        <h1>My Team</h1>
    </div>`;
    fs.writeFile("./dist/index.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const github = member.getGithub();
            data = `<div class="col-md-6 col-lg-4">
            <div class="card">
                <div class="card-header p-3 mb-2 bg-primary text-white">
                    <h2 class="card-header">${name}</h2>
                    <h3><i class="fas fa-glasses"></i>Engineer</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">GitHub: ${github}</li>
                </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-md-6 col-lg-4">
            <div class="card">
                <div class="card-header p-3 mb-2 bg-primary text-white">
                    <h2 class="card-header">${name}</h2>
                    <h3><i class="fas fa-user-graduate"></i>Intern</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>`;
        } else {
            const officeNumber = member.getOfficeNumber();
            data = `<div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header p-3 mb-2 bg-primary text-white">
                            <h2 class="card-header">${name}</h2>
                            <h3><i class="fas fa-mug-hot"></i>Manager</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Id: ${id}</li>
                            <li class="list-group-item">Email: ${email}</li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>`
        }
        console.log("adding team member");
        fs.appendFile("./dist/index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

initApp();



