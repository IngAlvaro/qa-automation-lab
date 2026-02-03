describe('Form validation - Required field behavior', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('Should show error when required input is empty', () => {

    cy.get('.action-email')
      .should('be.visible')
      .clear()

    cy.get('.action-form')
      .submit()

    cy.get('.error')
      .should('be.visible')
  })

})
