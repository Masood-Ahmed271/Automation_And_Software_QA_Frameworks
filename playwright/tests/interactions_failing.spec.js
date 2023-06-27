const { test, expect } = require('@playwright/test');


var FAILED = false;

async function runTests() {
  
  
  const tests = [
    {
      name: 'sets the header text to the item\'s name when double clicked',
      fn: async ({ page }, testInfo) => {
        await page.getByText('Option Two').first().dblclick();
        expect(await page.locator('[data-cy="box-1-selected-name"]')).toHaveText('Option One');
        
        if (testInfo.status === 'passed') {
            return 'Test passed!';
          } else if (testInfo.status === 'failed') {
            FAILED = true;
            console.log("Inside the first failing test", FAILED)
            return 'Test failed!';
          } else if (testInfo.status === 'skipped') {
            return 'Test skipped!';
          } else if (testInfo.status === 'expected') {
            return 'Test expected to fail!';
          }

      }
    },
    {
      name: 'displays the correct count for the number of selected checkboxes',
      fn: async ({ page }, testInfo) => {
        await page.getByLabel('Option One').check();
        expect(await page.locator('[data-cy=box-2-selected-count]')).toHaveText('1');

        if (testInfo.status === 'passed') {
            return 'Test passed!';
          } else if (testInfo.status === 'failed') {
            FAILED = true;
            return 'Test failed!';
          } else if (testInfo.status === 'skipped') {
            return 'Test skipped!';
          } else if (testInfo.status === 'expected') {
            return 'Test expected to fail!';
          }

      }
    },
    {
      name: 'displays the name of the currently selected item',
      fn: async ({ page }, testInfo) => {
        await page.getByRole('combobox').selectOption('Option Two');
        expect(await page.locator('[data-cy=box-3-selected-name]')).toHaveText('Option Two');

        if (testInfo.status === 'passed') {
            return 'Test passed!';
          } else if (testInfo.status === 'failed') {
            FAILED = true;
            return 'Test failed!';
          } else if (testInfo.status === 'skipped') {
            return 'Test skipped!';
          } else if (testInfo.status === 'expected') {
            return 'Test expected to fail!';
          }
      }
    },
    {
      name: 'should display the name of the most recently hovered item',
      fn: async ({ page }, testInfo) => {
        const box4ItemsList = await page.waitForSelector('[data-cy=box-4-items-list]');
        const secondChild = await box4ItemsList.$(':nth-child(2)');
        await secondChild.hover();
      
        const box4SelectedName = await page.waitForSelector('[data-cy=box-4-selected-name]');
        const selectedNameText = await box4SelectedName.innerText();
        expect(selectedNameText).toEqual('Option Two');

        if (testInfo.status === 'passed') {
            return 'Test passed!';
          } else if (testInfo.status === 'failed') {
            FAILED = true;
            return 'Test failed!';
          } else if (testInfo.status === 'skipped') {
            return 'Test skipped!';
          } else if (testInfo.status === 'expected') {
            return 'Test expected to fail!';
          }
      }
    },
  ];

  for (const testConfig of tests) {
    test(testConfig.name, testConfig.fn);
    console.log("Does it go below this?", testConfig.name)
    console.log("Did the test fail or not: ", FAILED);
    FAILED = false;
  }

  test.afterEach(() => {
    console.log("Did the test fail or not: ", FAILED);
  });

}

test.describe('Interactions Test Block', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/example-4');
  });

  runTests();
});