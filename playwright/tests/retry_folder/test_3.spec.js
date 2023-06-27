const { test, expect } = require('@playwright/test');
// var fs = require('fs');
import fs from 'fs';

// const filePath = './passed.txt';
// const dataToAppend = 'test_1.spec.js\n';

async function appendToFile() {

    await test.beforeEach(async ({ page }) => {
        await page.goto('/example-4');
    });
    
    
    await test('should display the name of the most recently hovered item', async ({ page }, testInfo) => {
        const box4ItemsList = await page.waitForSelector('[data-cy=box-4-items-list]');
        const secondChild = await box4ItemsList.$(':nth-child(2)');
        await secondChild.hover();
        
        const box4SelectedName = await page.waitForSelector('[data-cy=box-4-selected-name]');
        const selectedNameText = await box4SelectedName.innerText();
        expect(selectedNameText).toEqual('Option Two');

        console.log("test running")
        // console.log("Hello", testInfo.status)
        // const file = testInfo.outputPath('dir', 'mynewfile1.txt');
        // await fs.promises.appendFile(file, 'Hello content!', 'utf8');

        // fs.appendFile('../../../Testsss', 'Hello content!', (err) => {
        //     if (err) {
        //       console.error('Error appending to file:', err);
        //       return;
        //     }
          
        //     console.log('Data appended successfully!');
        //   });

        // try {
        //     await fs.writeFile('mynewfile1.txt', 'Hello content!', (err) => {
        //     if (err) {
        //       console.error('Error appending to file:', err);
        //       return;
        //     }
          
        //     console.log('Data appended successfully!');
        //   });
        //   } catch (err) {
        //     console.error('Error appending to file:', err);
        //   }
    });
}


appendToFile()
