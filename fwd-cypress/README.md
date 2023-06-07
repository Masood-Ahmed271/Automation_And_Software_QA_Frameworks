# Commands used

## Note: 
  You need a Node.js and NPM to run and work with Cypress

## First initialize our directory as npm package:

`npm init -y`

## To Install Cypress

`npm install cypress --save-dev`

## To run:
`npx cypress open` or `./node_modules/.bin/cypress open`

### or add the following script in package.json

```
 {
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```


## To Run All the specs under e2e folder
 `npx cypress run`
 `npx cypress run --headed`

## To Run Single spec under e2e folder
 `npx cypress run –-spec cypress\e2e\MyTest.js"`


## To Run All the specs under e2e folder using Chrome
 
 `npx cypress run --browser chrome`
 `npx cypress run --browser edge`
 `npx cypress run --browser edge --headed`

 ## File extension for tests:
  test.cy.js
