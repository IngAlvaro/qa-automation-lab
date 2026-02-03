describe('Form behavior - Empty submit allowed', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('Should allow form submission even when email is empty', () => {

    cy.get('.action-email')
      .clear()
      .should('have.value', '')

    cy.get('.action-form').submit()

    cy.contains('Your form has been submitted!')
      .should('be.visible')
  })

})
