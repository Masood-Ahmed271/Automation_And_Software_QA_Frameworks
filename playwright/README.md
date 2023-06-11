# Commands used

## Note: 
  You need a Node.js and NPM to run and work with Cypress
  
## To Install Playwright

`npm init playwright@latest`

## To Run all Tests without a UI:

`npx playwright test`

## To check the Tests report

`npx playwright show-report`

## To Run Tests using UI

`npx playwright test --ui`

## To run with multiple workers parallel:

`npx playwright test --workers 3`

## To run a specific file:

`npx playwright test [path to the file example (./tests/example.spec.js)]`

## To run a specific files:

`npx playwright test [path to the file example (./tests/example1.spec.js)] [path to the file example (./tests/example2.spec.js)]`


## To run the files which contain some specific keyword in their name:

`npx playwright test one two`    
It will run files which contains one and two


## We can run specific test:

`npx playwright test -g "title of the test case written`


## To run on the specific browser:

`npx playwright test --project=chromium`

## To run in the headed mode:

`npx playwright test --headed` or `npx playwright test --project=chromium --headed`

## To debug tests:

`npx playwright test --debug`

## To debug a specific file:

`npx playwright test example.spec.js --debug`

## To debug a specific file starting from a specific file:

`npx playwright test example.spec.js:21 --debug`
Here debugging starts from a specific line where the test is mentioned

## To run codegen (also called test generator):

`npx playwright codegen`

## To run codegen (also called test generator) on a specific URL:

`npx playwright codegen google.com`

## To run codegen (also called test generator) on a specific browser:

`npx playwright codegen --browser firefox`

## To record and save on the file using codegen:

`npx playwright codegen --target javascript -o [location of the file]`

## To set viewport - screen resolution (size):

`npx playwright codegen --viewport-size=800,600`

## To emulate on devices:

`npx playwright codegen --device="iPhone 11"`

## To know all codegen options:

`npx playwright codegen --help`

## How to open Trace Viewer (A GUI tool that helps viewing the executed tests along with snapshots, timeline, and other details (traces))

### Way 1:
  - Go to playwright.config.js
  - set trace: 'on-first-retry' recording trace when a test failed for the first time
  -             'off'     Do not record trace
  -             'on'      Record Trace for each trace
  -             'retain-on-failure' Record trace for each test but remove for successful test runs

### Setting trace from command line:

`npx playwright test --trace on`

### on internet you can view the trace
Go to the website: trace.playwright.dev


### To get the trace:

`npx playwright show-trace [tracefile path]`


## How to get trace of a test programmitically:

##### Locally for a single test
```
test.only( 'test name', async ({page, context}) => {
  await context.tracing.start({snapshots: true, screenshots: true}); // start of tracing

  // other codes

  await context.tracing.stop({path: 'test1.zip'});   // end tracing here
}
)
```


##### Globally for all tests:

```
test.only('test demo', async ({ page, context }) =＞ {
 await context.tracing.start({snapshots: true, screenshots: true})
 // test code
 await context.tracing.stop({path: 'test-trace.zip'});
});

let context
let page
test.beforeAll(async ({ browser }) =＞ {
 context = await browser.newContext()
 await context.tracing.start({ screenshots: true, snapshots: true })
 page = await context.newPage()
})

test.afterAll(async () =＞ {
 await context.tracing.stop({ path: 'test-trace.zip' });
})
```


## How to record video of the tests and slow-motions

- go to config file and under const config, go to use section and `video: on` and `launchOptions:{slowMo: 1000}` for slow motion of tests
