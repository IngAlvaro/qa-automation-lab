describe('E2E Form submission flow', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('Should complete and submit form successfully', () => {

    cy.get('.action-email')
      .type('automation@qa.com')

    cy.get('.action-form')
      .submit()

    cy.contains('Your form has been submitted!')
      .should('be.visible')
  })

})
