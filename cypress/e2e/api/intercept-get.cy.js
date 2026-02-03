describe('API Interception - GET request', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/comments/*').as('getComment')
    cy.visit('https://example.cypress.io/commands/network-requests')
  })

  it('Should intercept GET comment request', () => {

    cy.contains('Get Comment').click()

    cy.wait('@getComment')
      .its('response.statusCode')
      .should('eq', 200)
  })

})
