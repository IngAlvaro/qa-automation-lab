describe('Smoke Test - Public site', () => {

  it('Should load the Cypress example page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })

})
