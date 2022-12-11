# IPSENH-Hemiron-HTTP-Research
This repository contains an Angular front-end and NestJS back-end application to demonstrate the performance differences between HTTP 1.1 and 2.0

Run ```ng serve``` in the front-end folder after ```yarn install``` has been ran.

Run ```npm run dev``` in the back-end folder after ```yarn install``` has been ran. 
*Note: The test.crt and .key files represent localhost ssl files. These might need to be created on your local machine again to be used.*

The .env file needs to look like: 
```
DB_HOST='localhost'
DB_PORT=5432
DB_USERNAME='postgres'
DB_PASSWORD='' #Insert yourself
DB_NAME='ipsenh'
```
