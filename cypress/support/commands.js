// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import 'cypress-iframe';
import 'cypress-file-upload';
import 'cypress-mochawesome-reporter/register';
import * as XLSX from 'xlsx';

    Cypress.Commands.add("orionlogin", (email_id, password) => {
      cy.visit('https://vantage-uatx.unqork.io/#/auth/login')
      cy.get('input[id="username"]').type('divyashree.b-x+orionadm@auxosolutions.io');
    cy.get('input[id="password"]').type('unqork@12345');
    cy.get('input[type="submit"]').click();
    })

    Cypress.Commands.add('clicklink', (linkText) => {
      cy.contains('a', linkText).click({ force: true });
    });
    
    Cypress.Commands.add('readExcel', (filePath, sheetName) => {
      return cy.task('parseExcel', { filePath, sheetName });
    });
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })