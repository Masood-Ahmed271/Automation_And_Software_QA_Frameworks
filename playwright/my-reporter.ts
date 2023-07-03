import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult, TestStep } from '@playwright/test/reporter';
import * as fs from 'fs';

class MyReporter implements Reporter {
  failed_tests: number;
  passed_tests: number;
  
  constructor() {  // Constructor
    this.passed_tests = 0;
    this.failed_tests = 0;
    // Create a new file or truncate an existing file
    fs.writeFileSync('myreport.txt', '');
  }

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test: TestCase, result: TestResult) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === 'failed') {
      this.failed_tests+=1;
      console.log(`Finished test ${test.title}: ${result.status}`);
      const output = `${test.location.file}\n`;
      fs.appendFileSync('myreport.txt', output);
    }
    else {
      this.passed_tests+=1;
    }
  }

  onEnd(result: FullResult) {
    console.log(`Total tests: ${this.passed_tests + this.failed_tests}`);    
    console.log(`Passed tests: ${this.passed_tests}`);
    console.log(`Failed tests: ${this.failed_tests}`);
    console.log(`Finished the run: ${result.status}`);
  }
}

export default MyReporter;