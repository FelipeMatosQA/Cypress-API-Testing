# Cypress-restful-API.dev

On this portfolio project I used Cypress to automate the application "https://restful-api.dev/", this application is an example of open REST-API. 
The purpose of this project was to interact with the CRUD application using Cypress and all HTTP verbs and test the REST concepts.
Was used the pattern PageObjects, to have better maintenance and reusability of the code, MochaAwesome was used for the reports, and about the execution we have Integration with GitLab CI where was configured a cron job of daily executions.

Cypress is a powerful tool that may be used on different APIs and Integration tests. The kind of interaction used in this project can be used together with UI commands in e2e tests, to validate values between the UI and the database.

Cypress can be used to realize many different Integration tests, verifying the communication of the whole APIs of your system. 

# Execution Instructions

If you want to experiment with running this project, you'll need to Clone it first.

To clone this project from Github, run these commands:

```bash
## Clone this repository to a local directory.
git clone https://github.com/FelipeMatosQA/Cypress-API-Testing.git
## Enter in the project folder
cd Cypress-restful-API.dev
## Install the node modules
npm install
## Install Cypress locally
npx cypress install --force
## To run the tests visually use
npx cypress open
## To run the tests in a headless inviroment use
npx cypress run
```
# Report

 In the image below, you can see the report layout, that has passed all tests.
 
![REPORT](https://github.com/FelipeMatosQA/Cypress-restful-API.dev/assets/121990373/addd3d61-3d8f-4b4b-a310-c5e52ea98760)
