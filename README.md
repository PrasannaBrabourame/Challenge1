
# NodeJS API Challenge 1

Teachers need a system where they can perform administrative functions for their students. Teachers and students are identified by their email addresses.


## Prerequisites

MySQL should locally installed and database should be created 
##  Getting Started In Local

Step 1 : Clone the Repository

```bash
git clone git@github.com:PrasannaBrabourame/Challenge1.git
```

Step 2 : Move to the project path

```bash
cd Challenge1
```

Step 3 : Installing Dependencies

```bash
npm Install
```

step 4 : Create .env file

```bash
touch .env
```

and create the envirnoment configurations as below 
```bash
PORT=3000         // Port Number
DB_HOST=127.0.0.1 // MySQL URL
DB_USER=root      // MySQL UserName
DB_NAME=teacher   // MySQL DataBaseName
```
Add the below line to the envirnoment variables if the MySQL database is protected with password

```bash
DB_PASSWORD=XXXX  // MySQL Password
```
Note : Database should be created in MySQL

step 5 : Database Migrations 

```bash
knex migrate:latest
```
 the above command will create the list of tables and columns details in MySQL details mentioned in the above environment variables

step 6 : Running Test

```bash
sh init.sh
```

it will run all the test cases

step 7 : Start the server locally

```bash 
node server.js
```

or you can run the Project with PM2 if PM2 is globally installed

```bash
pm2 start server.js --name service1
```

## Solution Diagram

![Solution Diagram](https://github.com/PrasannaBrabourame/Challenge1/blob/main/img/solutionDiagram.png?raw=true)
## Entity Diagram

![Entity Diagram](https://github.com/PrasannaBrabourame/Challenge1/blob/main/img/entityDiagram.png?raw=true)
## Authors

- [@Prasanna Brabourame](https://www.github.com/PrasannaBrabourame)

