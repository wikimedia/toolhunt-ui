# toolhunt-ui
# Description
Frontend Repository for Toolhunt. Toolhunt is a web application for editing Toolhub records in a fun and easy way. It allows users to view and add missing fields for tools in Toolhub. Please find the link to the backend repository [here](https://github.com/wikimedia/toolhunt). This is an [Outreachy](https://www.outreachy.org/) Internship project. 
## Issue Tracker
 This project uses [Phabricator](https://phabricator.wikimedia.org/project/board/6283/) to track issues and we would advice against using Github issue traking for bugs
## Setup/Installation Requirements
* Clone the Frontend repository to your machine using `git clone https://github.com/wikimedia/toolhunt-ui.git` 
* Clone the Backend repository to your machine using `git clone https://github.com/wikimedia/toolhunt.git`
* cd into the cloned Backend repository to build the Docker image using the Dockerfile located in the ./compose/flask/ directory. `docker build -f ./compose/flask/Dockerfile . -t toolhunt-be:dev`
* CD to the cloned Frontend repository and run this command `docker-compose down && docker-compose up -d`
* Insert data to the database using the instructions on the [Backend repository](https://github.com/wikimedia/toolhunt)
* Finally, to view the Frontend page on the browser: Naviage to `http://localhost:8082/`
## Languages and Tools
* Vue.js
* HTML
* CSS
* Docker
* Vuetify
* Pinia
* Vite
* Vitest

