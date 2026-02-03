describe('Form inputs - Text input validation', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('Should type and validate text input correctly', () => {

    cy.get('.action-email')
      .should('be.visible')
      .type('qa@test.com')
      .should('have.value', 'qa@test.com')

    cy.get('.action-email')
      .clear()
      .should('have.value', '')
  })

})
