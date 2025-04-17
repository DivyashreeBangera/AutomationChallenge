const path = require('path');
const { defineConfig } = require("cypress");
const fs = require('fs');
const XLSX = require('xlsx');
const unzipper = require('unzipper');

module.exports = defineConfig({
  projectId: 'xin2vs',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        parseExcel({ filePath, sheetName }) {
          const excelPath = path.resolve(__dirname, "cypress/fixtures", filePath);
          console.log(`Looking for Excel file at: ${excelPath}`);
          if (!fs.existsSync(excelPath)) {
            throw new Error(`Excel file not found: ${excelPath}`);
          }
          const fileBuffer = fs.readFileSync(excelPath);
          const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

          if (!workbook.Sheets[sheetName]) {
            throw new Error(`🚨 Sheet "${sheetName}" not found in Excel file!`);
          }
          const sheet = workbook.Sheets[sheetName];
          return XLSX.utils.sheet_to_json(sheet);
        },

        extractZipFile(filePath) {
          return new Promise((resolve, reject) => {
            const file = path.join('cypress/fixtures', filePath);
            const fileNames = [];

            if (!fs.existsSync(file)) {
              return reject(`ZIP file not found: ${file}`);
            }

            fs.createReadStream(file)
              .pipe(unzipper.Parse())
              .on('entry', (entry) => {
                const fileName = entry.path;

                // Only push PDF files to the array
                if (path.extname(fileName) === '.pdf') {
                  fileNames.push(fileName);
                }
                entry.autodrain(); // Ensure that the stream continues processing
              })
              .on('close', () => resolve(fileNames)) // Resolve when extraction is done
              .on('error', (err) => reject(err));  // Reject on error
          });
        }
      });

      // IMPORTANT: Return the config object
      return config;
    },
    reporter: 'mochawesome', // Reporter should be a direct property of e2e
    reporterOptions: {      // Reporter options should be a direct property of e2e
      reportDir: 'cypress/report',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'yyyy-mm-dd_HH-MM-ss',
    },
  },
  // You can also define reporter and reporterOptions at the top level
  // reporter: 'mochawesome',
  // reporterOptions: { ... }
});