describe('YouTube Share Modal Test', () => {
    it('should display the Share modal when Share button is clicked', () => {
      // Visit the video page (example)
      cy.visit('https://www.youtube.com/watch?v=ymXmX1WhjZM'); // Replace with a real test video
  
      // Wait for the page to load (including video)
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('video', { timeout: 10000 }).should('be.visible');

      // Hover over video to ensure controls are visible (Share button)
    cy.get('video').trigger('mouseover');

    // Pause the video 
    cy.get('video').then(($video) => {
      $video[0].pause();  // Pauses the video using the DOM API
    });
    cy.wait(10000)
  
      // Click the "Share" button (you may need to scroll into view first)
      cy.get('.ytp-share-button').scrollIntoView().click({ force: true }); //cypress detects the element which is hidden using force=true
      
  
     // Ensure that the Share panel is visible (targeting the share panel inside the button's container)
    cy.get('#ytp-id-25')  // Wait for the share panel to appear
      .find('.ytp-share-panel-link') // Locate the share link inside the panel
      .should('be.visible') // Ensure it's visible
      .invoke('attr', 'href')  // Get the 'href' attribute (the share URL)
      .then((link) => {
        cy.log('Share link:', link); // Log the share link to the Cypress console
      });
  });
});