# My Node Project

## Description
A simple Node.js project to fetch user counts from a web service and compute a result.

## Setup
1. Install dependencies:
   ```bash
   npm install
2. Run de project in watch mode
   npm run start:dev 
3. Run test
   npm test

## Exercises solution
1. In the first exercise I found that there is no error handling, I added try/catch for this, additionally I found that in the computeResult() method in the assignment of the total the asynchronism was not being handled, which would return a promise and not the expected result, I corrected this, adding an await to the call of the query method. Additionally, I changed the URL to perform the practical exercise, and I decided to use the Axios library for a better handling of the requests.
2. In the second exercise, try to use the value of total immediately after starting the promise, without waiting for it to resolve, the .then() will be executed after the function has returned, so total will always be undefined when evaluating the conditions. Resolved by returning the function asynchronous with async/await.
3. Watch step 3 in setup.