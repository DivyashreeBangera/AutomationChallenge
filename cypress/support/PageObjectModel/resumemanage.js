class ResumeManage{
    getSearchInput() {
        return cy.get('input[type="search"]').eq(0)
      }
    
      getSearchButton() {
        return cy.get('#navbarSupportedContent > :nth-child(1) > .btn-primary')
      }
    
      getSearchResults() {
        return cy.get('#table'); 
      }
    
      enterSearchTerm(searchTerm) {
      this.getSearchInput().type(searchTerm);
     // return this; 
     }
    
     clickSearchButton() {
      cy.get('#navbarSupportedContent > :nth-child(1) > .btn-primary').should('exist').click();
       this.getSearchButton().click();
     // return this;
      }
    
      clearSearchInput() {
      this.getSearchInput().clear();
      return this;
     }

     validatesearch(searchTerm){
     //return cy.contains(searchTerm).should('be.visible');
     return cy.get('a.long-filename').contains(searchTerm)
     .should('be.visible');
    }

    validateinvalidsearch(expectedMessage){
      return cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(2)').should('contain.text', expectedMessage);
     }

      //Intro call
     getIntroCallDropdown() {
      return cy.get('#introFilter'); 
    }
  
    getIntroCallDropdownOptions() {
      return this.getIntroCallDropdown().find('option'); 
    }
  
    selectOption(optionText) {
      this.getIntroCallDropdown().select(optionText);
      return this; // For chaining
    }
  
    verifyIntroCallSelectedOption(expectedOptionText) {
      this.getIntroCallDropdown()
        .find(':selected')
        .should('have.text', expectedOptionText);
      return this;
    }
  
    verifyIntroCallOptionExists(optionText) {
      this.getIntroCallDropdownOptions().should('contain', optionText);
      return this;
    }
  
    verifyIntroCallOptionNotExists(optionText) {
      this.getIntroCallDropdownOptions().should('not.contain', optionText);
      return this;
    }
  
    verifyIntroCallAllOptions(expectedOptions) {
      this.getIntroCallDropdownOptions()
        .then(($options) => {
          const actualOptions = Array.from($options).map((option) => option.innerText);
          expect(actualOptions).to.deep.equal(expectedOptions);
        });
      return this;
    }

 //Interview 1
    getInterview1Dropdown() {
      return cy.get('#interview1Filter'); 
    }
  
    getInterview1DropdownOptions() {
      return this.getInterview1Dropdown().find('option'); 
    }
  
    selectInterview1Option(optionText1) {
      this.getInterview1Dropdown().select(optionText1);
      return this; // For chaining
    }
  
    verifyInterview1SelectedOption(expectedOptionText) {
      this.getInterview1Dropdown()
        .find(':selected')
        .should('have.text', expectedOptionText);
      return this;
    }
  
    verifyInterview1OptionExists(optionText1) {
      this.getInterview1DropdownOptions().should('contain', optionText1);
      return this;
    }
  
    verifyInterview1OptionNotExists(optionText1) {
      this.getInterview1DropdownOptions().should('not.contain', optionText1);
      return this;
    }
  
    verifyInterview1AllOptions(expectedOptions) {
      this.getInterview1DropdownOptions()
        .then(($options) => {
          const actualOptions = Array.from($options).map((option) => option.innerText);
          expect(actualOptions).to.deep.equal(expectedOptions);
        });
      return this;
    }

    //Interview 2

    getInterview2Dropdown() {
      return cy.get('#interview2Filter')
    }
  
    getInterview2DropdownOptions() {
      return this.getInterview2Dropdown().find('option'); 
    }
  
    selectInterview2Option(optionText1) {
      this.getInterview2Dropdown().select(optionText1);
      return this; // For chaining
    }
  
    verifyInterview2SelectedOption(expectedOptionText) {
      this.getInterview2Dropdown()
        .find(':selected')
        .should('have.text', expectedOptionText);
      return this;
    }
  
    verifyInterview2OptionExists(optionText1) {
      this.getInterview2DropdownOptions().should('contain', optionText1);
      return this;
    }
  
    verifyInterview2OptionNotExists(optionText1) {
      this.getInterview2DropdownOptions().should('not.contain', optionText1);
      return this;
    }
  
    verifyInterview2AllOptions(expectedOptions) {
      this.getInterview2DropdownOptions()
        .then(($options) => {
          const actualOptions = Array.from($options).map((option) => option.innerText);
          expect(actualOptions).to.deep.equal(expectedOptions);
        });
      return this;
    }
//All rounds cleared

getAllroundDropdown() {
  return cy.get('#allRoundsFilter')
}

getAllroundDropdownOptions() {
  return this.getAllroundDropdown().find('option'); 
}

selectAllroundOption(optionText1) {
  this.getAllroundDropdown().select(optionText1);
  return this; // For chaining
}

verifyAllroundSelectedOption(expectedOptionText) {
  this.getAllroundDropdown()
    .find(':selected')
    .should('have.text', expectedOptionText);
  return this;
}

verifyAllroundOptionExists(optionText1) {
  this.getAllroundDropdownOptions().should('contain', optionText1);
  return this;
}

verifyAllroundOptionNotExists(optionText1) {
  this.getAllroundDropdownOptions().should('not.contain', optionText1);
  return this;
}

verifyAllroundAllOptions(expectedOptions1) {
  this.getAllroundDropdownOptions()
    .then(($options) => {
      const actualOptions = Array.from($options).map((option) => option.innerText);
      expect(actualOptions).to.deep.equal(expectedOptions1);
    });
  return this;
}

//Role

getRoleDropdown() {
  return cy.get('#role')
}

getRoleDropdownOptions() {
  return this.getRoleDropdown().find('option'); 
}

selectRoleOption(optionText1) {
  this.getRoleDropdown().select(optionText1);
  return this; // For chaining
}

verifyRoleSelectedOption(expectedOptionText) {
  this.getRoleDropdown()
    .find(':selected')
    .should('have.text', expectedOptionText);
  return this;
}

verifyRoleOptionExists(optionText1) {
  this.getRoleDropdownOptions().should('contain', optionText1);
  return this;
}

verifyRoleOptionNotExists(optionText1) {
  this.getRoleDropdownOptions().should('not.contain', optionText1);
  return this;
}

verifyRoleAllOptions(expectedOptions1) {
  this.getRoleDropdownOptions()
    .then(($options) => {
      const actualOptions = Array.from($options).map((option) => option.innerText);
      expect(actualOptions).to.deep.equal(expectedOptions1);
    });
  return this;
}

//Month

getMonthDropdown() {
  return cy.get('#month')
}

getMonthDropdownOptions() {
  return this.getMonthDropdown().find('option'); 
}

selectMonthOption(optionText1) {
  this.getMonthDropdown().select(optionText1);
  return this; // For chaining
}

verifyMonthSelectedOption(expectedOptionText) {
  this.getMonthDropdown()
    .find(':selected')
    .invoke('text') // Get the text content
    .then((actualText) => {
      expect(actualText.trim()).to.equal(expectedOptionText); // Trim actual text and assert
    });
  return this;
}

verifyMonthOptionExists(optionText1) {
  this.getMonthDropdownOptions().should('contain', optionText1);
  return this;
}

verifyMonthOptionNotExists(optionText1) {
  this.getMonthDropdownOptions().should('not.contain', optionText1);
  return this;
}

verifyMonthAllOptions(expectedOptions1) {
  this.getMonthDropdownOptions()
    .then(($options) => {
      const actualOptions = Array.from($options).map((option) => option.innerText.trim());
      expect(actualOptions).to.deep.equal(expectedOptions1);
    });
  return this;
}

//Week

getWeekDropdown() {
  return cy.get('#week')
}

getWeekDropdownOptions() {
  return this.getWeekDropdown().find('option'); 
}

selectWeekOption(optionText1) {
  this.getWeekDropdown().select(optionText1);
  return this; // For chaining
}

verifyWeekSelectedOption(expectedOptionText) {
  this.getWeekDropdown()
    .find(':selected')
    .invoke('text') // Get the text content
    .then((actualText) => {
      expect(actualText.trim()).to.equal(expectedOptionText); // Trim actual text and assert
    });
  return this;
}

verifyWeekOptionExists(optionText1) {
  this.getWeekDropdownOptions().should('contain', optionText1);
  return this;
}

verifyWeekOptionNotExists(optionText1) {
  this.getWeekDropdownOptions().should('not.contain', optionText1);
  return this;
}

verifyWeekAllOptions(expectedOptions1) {
  this.getWeekDropdownOptions()
    .then(($options) => {
      const actualOptions = Array.from($options).map((option) => option.innerText.trim());
      expect(actualOptions).to.deep.equal(expectedOptions1);
    });
  return this;
}

//Columns to display

getColumnsDropdown() {
  return cy.get('#dropdown-btn')
}

getColumnsDropdownOptionsContainer() {
  return cy.get('#dropdown-menu'); // Adjust the selector if needed
}

getColumnsDropdownOptions() {
  return this.getColumnsDropdownOptionsContainer().find('input[type="checkbox"]');
}

// Method to get a specific checkbox option by its associated text
getColumnCheckboxOptionByText(optionText) {
  // This is a general approach, you might need to adapt the selector
  // based on your specific HTML structure.
  return this.getColumnsDropdownOptionsContainer()
    .contains(optionText) // Find the element containing the text
    .prev('input[type="checkbox"]'); // Assuming the checkbox is a preceding sibling
  // OR
  // .parent().find('input[type="checkbox"]'); // Assuming the checkbox is a child of the parent
  // OR use a more specific selector if available (e.g., based on a data attribute)
}

selectColumnsOption(optionText1) {
  this.getColumnsDropdown().click(); // Open the dropdown
  this.getColumnCheckboxOptionByText(optionText1)
    .check({ force: true }); // Check the checkbox
  // If you need to close the dropdown after each selection, uncomment the next line:
  // this.getColumnsDropdownButton().click();
  return this;
}

deselectColumnsOption(optionText1) {
  this.getColumnsDropdown().click(); // Open the dropdown
  this.getColumnCheckboxOptionByText(optionText1)
    .uncheck({ force: true }); // Uncheck the checkbox
  // If you need to close the dropdown after each deselection, uncomment the next line:
  // this.getColumnsDropdownButton().click();
  return this;
}

verifyColumnsSelectedOption(expectedOptionText) {
  this.getColumnCheckboxOptionByText(expectedOptionText)
    .should('be.checked');
  return this;
}

verifyColumnsOptionExists(optionText1) {
  this.getColumnsDropdownButton().click(); // Open the dropdown
  this.getColumnCheckboxOptionByText(optionText1)
    .should('exist');
  this.getColumnsDropdownButton().click(); // Close the dropdown (optional)
  return this;
}

verifyColumnsOptionNotExists(optionText1) {
  this.getColumnsDropdownButton().click(); // Open the dropdown
  this.getColumnCheckboxOptionByText(optionText1)
    .should('not.exist');
  this.getColumnsDropdownButton().click(); // Close the dropdown (optional)
  return this;
}

verifyColumnsAllOptions(expectedOptions1) {
  this.getColumnsDropdownButton().click(); // Open the dropdown
  this.getColumnCheckboxOptions()
    .should('have.length', expectedOptions1.length); // Verify the number of checkboxes

  expectedOptions1.forEach((expectedOption) => {
    this.getColumnCheckboxOptionByText(expectedOption)
      .should('exist'); // Verify each expected option exists
  });
  this.getColumnsDropdownButton().click(); // Close the dropdown (optional)
  return this;
}

verifyColumnsAllOptionsChecked(expectedCheckedOptions) {
  this.getColumnsDropdownButton().click(); // Open the dropdown
  expectedCheckedOptions.forEach((checkedOption) => {
    this.getColumnCheckboxOptionByText(checkedOption)
      .should('be.checked');
  });

  this.getColumnCheckboxOptions()
    .filter(':checked')
    .should('have.length', expectedCheckedOptions.length); // Verify only the expected are checked

  this.getColumnsDropdownButton().click(); // Close the dropdown (optional)
  return this;
}

verifyColumnsAllOptionsUnchecked(expectedUncheckedOptions) {
  this.getColumnsDropdownButton().click(); // Open the dropdown
  expectedUncheckedOptions.forEach((uncheckedOption) => {
    this.getColumnCheckboxOptionByText(uncheckedOption)
      .should('not.be.checked');
  });
  this.getColumnsDropdownButton().click(); // Close the dropdown (optional)
  return this;
}

//View button 
getviewbutton() {
  return cy.get(':nth-child(1) > .view > .btn')
}

verifyviewheader(headertext){
return cy.contains(headertext).should('be.visible')
}

verifyviewbackbutton(){
  return cy.get('.btn').should('be.visible')
}

verifyintrocalldetails(IntroHeader,StatusOptionSelect,commentsinput){
  
    this.getviewbutton().click()
    cy.wait(2000)
    // Use cy.wrap(null) to start a chain of assertions without returning a specific element
    cy.wrap(null)
      .then(() => cy.contains(IntroHeader).should('be.visible'))
      .then(() => cy.contains(StatusOptionSelect).should('be.visible'))
      .then(() => cy.contains(commentsinput).should('be.visible'))
      .then(() => {
        // 1. Get Today's Date in the Expected Format
        const todayIndia = new Date(); // Current time in Mattu, Karnataka, India
        const year = todayIndia.getFullYear();
        const month = String(todayIndia.getMonth() + 1).padStart(2, '0');
        const day = String(todayIndia.getDate()).padStart(2, '0');
        const todaysDateYYYYMMDD = `${year}-${month}-${day}`; // Example: YYYY-MM-DD
        cy.contains(todaysDateYYYYMMDD).should('be.visible');
        
      });
    return this;
  }

clickbackbutton(){
  return cy.get('.btn')
}

clickviewback(backheader){
 this.clickbackbutton().click()
 return cy.contains(backheader).should('be.visible')
  }

//****EDIT ICON ***/
geteditbutton(){
  return cy.get(':nth-child(1) > .action > [style=" display: block; margin-left: auto; margin-right: auto;"]')

}

verifyeditfields(){
  this.geteditbutton().click()
  cy.wait(2000)
  // Use cy.wrap(null) to start a chain of assertions without returning a specific element
  cy.wrap(null)
    .then(() => cy.contains("Email").should('be.visible'))
    .then(() => cy.contains("Name").should('be.visible'))
    .then(() => cy.contains("Qualification").should('be.visible'))
    .then(() => cy.contains("Phone:").should('be.visible'))
    .then(() => cy.contains("Current Location:").should('be.visible'))
    .then(() => cy.contains("QA Lead Assigned:").should('be.visible'))
    .then(() => cy.contains("Actual CTC:").should('be.visible'))
    .then(() => cy.contains("Excepting CTC:").should('be.visible'))
    .then(() => cy.contains("Experience:").should('be.visible'))
    .then(() => cy.contains("Notice period:").should('be.visible'))
    .then(() => cy.contains("Week :").should('be.visible'))
    .then(() => cy.contains("Resume Link:").should('be.visible'));

  
  return this;
}

editsubmitbutton(){
  return cy.get('.btn-primary')
}

verifyeditsubmitbutton(){
return  this.editsubmitbutton().should('be.visible')
}

validatekeditsubmitbutton(successmessage){
  this.editsubmitbutton().click()
  return cy.contains(successmessage).should('be.visible')
}

geteditbackbutton(){
  return cy.get('.btn-outline-secondary')
}

clickeditback(backheader){
  this.geteditbackbutton().click()
  return cy.contains(backheader).should('be.visible')
   }


   //****INTRO CALL****/
   getintrocallbutton(){
    return cy.get('a.btn').contains('Intro')
   }

   clickintrocallbutton(){
    return this.getintrocallbutton().click()
   }

   constructor() {
    // Locators for elements on the Intro Call page
    this.header = 'h1';
    this.newPersonInput = '#newPersonInput';
    this.addPersonBtn = '#addPersonBtn';
    this.dateInput = '#date';
    this.statusDropdown = '#status';
    this.fourthFormControl = ':nth-child(4) > .form-control'; 
    this.firstButton = ':nth-child(1) > .btn';           
    this.secondButton = ':nth-child(2) > .btn';          
    this.primaryStyledButton = '[style*="display: flex"] > .btn-primary'; 
    this.secondaryOutlineButton = '.btn-outline-secondary';
    this.submitbutton='.btn-primary'
  }

  verifyIntroCallFields(introcallheader) {
    //cy.get(this.header).contains(introcallheader).should('be.visible');
    cy.get(this.newPersonInput).should('be.visible');
    cy.get(this.addPersonBtn).should('be.visible');
    cy.get(this.dateInput).should('be.visible');
    cy.get(this.statusDropdown).should('be.visible');
    cy.get(this.fourthFormControl).should('be.visible');
    cy.get(this.firstButton).should('be.visible');
    cy.get(this.secondButton).should('be.visible');
    cy.get(this.primaryStyledButton).should('be.visible');
    cy.get(this.secondaryOutlineButton).should('be.visible');
  }

    enterTodaysDateInFormatMMDDYYYY() {
      const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    cy.get(this.dateInput).type(formattedDate);

    }

    getaddpanel()
    {
      return cy.get('#newPersonInput')
    }

    getaddbutton(){
      return cy.get('#addPersonBtn')
    }

    addpanel(addpanel){
     this.getaddpanel().type(addpanel)
     this.getaddbutton().click()
     return this;
    }

    clickpaneldrodown(){
      return cy.get('[style=" margin-bottom:40px;"] > .mb-3').click()
    }

    selectpanel(addpanel){
      this.clickpaneldrodown()
      return cy.get(':nth-child(4) > .item-container').contains(addpanel).check
    }

    getStatusDropdown() {
      return cy.get('#status')
    }
    
    getStatusDropdownOptions() {
      return this.getStatusDropdown().find('option'); 
    }
    
    selectStatusOption(optionText1) {
      this.getStatusDropdown().select(optionText1);
      return this; 
    }
    getCommentsInput() {
      return cy.get(':nth-child(4) > .form-control')
    }
    
    FillCommentsInput(option) {
      this.getCommentsInput().clear()
      return this.getCommentsInput().type('option'); 
    }

    Introcallsubmitbutton(){
      return cy.get('[style="display: flex; align-items: center; justify-content:center;"] > .btn-primary')
   
    }
    verifyIntrocallsubmitbutton(){
    return  this.Introcallsubmitbutton().should('be.visible')
    }
    
    validateIntrocallsubmitbutton(successmessage){
      this.Introcallsubmitbutton().click()
      return cy.contains(successmessage).should('be.visible')
    }
    verifyinterview1visible(){
      return this.getinterview1button().should('be.visible')
      }


    //****INTERVIEW 1 CALL****/
   getinterview1button(){
    return cy.get('a.btn').contains('1')
   }

   clickinterview1button(){
    return this.getinterview1button().click()
   }
   Interview1submitbutton(){
    return cy.get('[style="display: flex; align-items: center; justify-content: center;"] > .btn-primary')
 
  }
  verifyInterview1submitbutton(){
  return  this.Interview1submitbutton().should('be.visible')
  }
  
  validateInterview1submitbutton(successmessage){
    this.Interview1submitbutton().click()
    return cy.contains(successmessage).should('be.visible')
  }

  verifyinterview2visible(){
  return this.getinterview2button().should('be.visible')
  }
 
    //****INTERVIEW 2 CALL****/
    getinterview2button(){
      return cy.get('a.btn').contains('2')
     }
  
     clickinterview2button(){
      return this.getinterview2button().click()
     }

     verifyHRbuttonvisible(){
      return this.getHRRoundbutton().should('be.visible')
      }
  
//****HR Round CALL****/
getHRRoundbutton(){
  return cy.get('a.btn').contains('HR')
 }

 clickHRRoundbutton(){
  return this.getHRRoundbutton().click()
 }

 verifyHRRoundFields(introcallheader) {
  //cy.get(this.header).contains(introcallheader).should('be.visible');
  cy.get(this.newPersonInput).should('be.visible');
  cy.get(this.addPersonBtn).should('be.visible');
  cy.get(this.dateInput).should('be.visible');
  cy.get(this.statusDropdown).should('be.visible');
  cy.get(this.fourthFormControl).should('be.visible');
  cy.get(this.submitbutton).should('be.visible');
  cy.get(this.secondaryOutlineButton).should('be.visible');
}

HRRoundsubmitbutton(){
  return cy.get('.btn-primary')

}
verifyHRRoundsubmitbutton(){
return  this.HRRoundsubmitbutton().should('be.visible')
}

validateHRRoundsubmitbutton(successmessage){
  this.HRRoundsubmitbutton().click()
  return cy.contains(successmessage).should('be.visible')
}

}
    export default new ResumeManage();