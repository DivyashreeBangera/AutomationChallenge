class ExcelUpload {
    gotouploadoption() {

      return cy.get(':nth-child(2) > .nav-link') // Get the welcome message element
    }
  

      // Method to validate all available options in the month dropdown
    validateexcelMonthOptions(expectedMonths) {
        cy.get('#month_excel', { timeout: 5000 }).should('be.visible'); // Ensure dropdown is visible
        cy.get('#month_excel').find('option').then((options) => {
            const actualMonths = [...options].map(option => option.textContent.trim()); // Extract text values
            expect(actualMonths).to.deep.equal(expectedMonths); // Validate against expected values
        });
    }
      selectexcelMonth(month) {
        cy.get('#month_excel', { timeout: 5000 }).should('be.visible'); // Wait for dropdown to be visible
        //cy.get('#tag').click()
        cy.get('#month_excel').select(month)// Select the role
        cy.get('#month_excel').should('have.value', month); // Verify selection
      }

      // Method to click the download button
    clickDownloadButton() {
        cy.get('h5') // Update this with the correct selector for the download button
          .should('be.visible')
          .click();
    }

    // Method to verify the downloaded file exists in the downloads folder
    verifyDownload(downloadFileName) {
        const downloadFolder = 'cypress/downloads'; // Cypress default download location
        cy.wait(5000); // Wait for file download to complete
        cy.readFile(`${downloadFolder}/${downloadFileName}`).should('exist'); // Verify file exists
    }
      // Upload a PDF File
  uploadExcelFile(filePath) {
    cy.get('input[type="file"]').eq(1).should('be.visible'); // Ensure file input is visible
    cy.get('input[type="file"]').eq(1).attachFile(filePath); // Upload the file
    cy.get('button[type="submit"]').eq(1).click(); // Click submit button (ensure correct selector)
}
  // Verify Successful Upload
  verifyExcelUploadSuccess() {
  
    cy.get('.alert', { timeout: 5000 }) // Corrected selector format
  .should('be.visible') // Ensure success message is visible
  .and('contain.text', 'Resume(s) uploaded successfully!'); // Verify the success text

  }

  verifydublicateupload() {
  
    cy.get('.alert', { timeout: 5000 }) // Corrected selector format
  .should('be.visible') // Ensure success message is visible
  .and('contain.text', 'Resume(s) already exists'); // Verify the success text

  }


  // Validate Uploaded Data
  resumemonthselect(month) {
    cy.get('#month', { timeout: 5000 }).should('be.visible'); // Wait for dropdown to be visible
      //cy.get('#tag').click()
      cy.get('#month').select(month)// Select the role
      cy.get('#month').should('have.value', month); 
}

    readingexcel(expectedData) {
    expectedData.forEach((row) => {
        //cy.contains(row['Candidate Name'],{ timeout: 5000 }).should('be.visible');
        if (row['Candidate Name']) {
            cy.contains('a.long-filename', row['Candidate Name'], { timeout: 5000 })  // Assuming it's inside an <a> tag
              .should('be.visible');
        } else {
            cy.log('Candidate Name is not present in the row');
        }
    cy.contains(row['Phone'], { timeout: 5000 }).should('be.visible');
   // cy.contains(row['Experience /Fresher'],{ timeout: 5000 }).should('be.visible');
   if (row['Experience /Fresher']) {
    const experienceText = row['Experience'].trim();
    cy.contains('td.wrap-text.checkbox-column.experience', experienceText, { timeout: 5000 })
      .should('be.visible')
      .log(`Experience / Fresher found: ${experienceText}`);
  } else {
    cy.log('Experience / Fresher is not defined in the row');
  }
    });
  }
}
  
  export default new ExcelUpload();