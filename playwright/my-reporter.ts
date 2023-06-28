import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';

class MyReporter implements Reporter {
  // onBegin(config: FullConfig, suite: Suite) {
  //   console.log(`Starting the run with ${suite.allTests().length} tests`);
  // }

  // onTestBegin(test: TestCase, result: TestResult) {
  //   console.log(`Starting test ${test.title}`);
  // }

  onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === 'failed') {
      // console.log(`Finished test ${test.title}: ${result.status}`);
      // // console.log("title path", test.titlePath());
      // console.log("full title location", test.location.file);
      console.log(test.location.file);
    }
  }

  // onEnd(result: FullResult) {
  //   console.log(`Finished the run: ${result.status}`);
  // }
}

export default MyReporter;