import QAlogin from '../support/PageObjectModel/QAlogin';
import UploadPage from '../support/PageObjectModel/pdfupload';
import excelupload from '../support/PageObjectModel/excelupload';


Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test
  if (err.message.includes("Cannot read properties of null (reading 'addEventListener')")) {
    return false;  // returning false prevents the test from failing
  }
  return true;  // allows other errors to fail the test
});


describe('Login Test', () => {
    let testData;
   
    before(() => {
        cy.fixture('example.json').then((data) => {
          testData = data; // Store data in testData
          Cypress.env('QAEmailAddress', data.QAEmailAddress);
          Cypress.env('role', data.role);
          Cypress.env('month', data.month);
        });
      });
    

  

  beforeEach(() => {
    const email = Cypress.env('QAEmailAddress');
    
    QAlogin.visit();   // Visit the login page before each test
  QAlogin.login(email); 
  excelupload.gotouploadoption().click()
  });


  it('Verify user can upload excel file successully',()=>{
    
    //const filePath = 'test-files/singlepdf.pdf  '; 
    const month = Cypress.env('month');
    expect(month, "Month should be defined").to.not.be.undefined;
    const role = Cypress.env('role'); 
    expect(role, "Role should be defined").to.not.be.undefined;

    const expectedMonths = ['Select a month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
    excelupload.validateexcelMonthOptions(expectedMonths);
    excelupload.selectexcelMonth(month)
    const downloadFileName = 'excel_test_sample.xlsx'; 

    // Step 1: Go to the download button
    excelupload.clickDownloadButton();

    // Step 3: Verify if the file was downloaded successfully
   excelupload.verifyDownload(downloadFileName);
    

 // it('Validating the upload a file',()=>{
    const filePath = 'excelresume3.xlsx';

    // Upload the file
   excelupload.uploadExcelFile(filePath);

    // Verify the upload success
   //excelupload.verifyExcelUploadSuccess();

    //verifying uploading same file again and verifying the already exists message
    //excelupload.uploadExcelFile(filePath);
   // excelupload.verifydublicateupload();

   // Read & Validate Excel Data
   UploadPage.gotoresumemanagement().click()
   excelupload.resumemonthselect(month)
   cy.task('parseExcel', { filePath: 'excelresume3.xlsx', sheetName: 'Sheet1' }).then((excelData) => {
    excelupload.readingexcel(excelData);

  })

})
})