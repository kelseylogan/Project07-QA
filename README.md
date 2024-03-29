# Project 7 - Tests for GET, POST, PUT, and DELETE for Urban Grocers
* Documentation source - Swagger/apiDoc
* Tech used - Node.js, Jest, VSCode, Postman

##   To clone the repository to your local computer:
* Open your preferred terminal emulator.
* Clone the repository to your local computer:
*        // if you are using HTTPS
        git clone https://github.com/username/hm07-qa-us.git
         // replace "username" with your GitHub username
 
         // if you are using SSH
        git clone git@github.com:username/hm07-qa-us.git
         // replace "username" with your GitHub username
* Run *npm install* from the console in your project folder.
## How to set the test URL
* In *config.js*, replace the API URL with the unique link generated after the launch of Urban Grocers server.
## How to run each test suite
* GET
*       Check the response status code.
*       Check that the response body returns the expected data.
* POST
*       Check the response status code.
*       Check that the response body returns the expected data.
*       Using apiDocs or Swagger, determine what input is needed to run the selected POST request, and include it at the beginning of the test suite using const requestBody = {}
* PUT
*       Check the response status code.
*       Check that the response body returns the expected data.
*       Using apiDocs or Swagger, determine what input is needed to run the selected POST request, and include it at the beginning of the test suite using const requestBody = {}
* DELETE
*       Check the response status code.
*       Check that the response body returns the expected data.
*       Use the grocery order number created in the PUT test in the DELETE test.
*       There is a known bug with the DELETE request, as the server does not recognize an already existing order number to delete.
