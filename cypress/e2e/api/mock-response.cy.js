describe('API Mock - Controlled response', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/comments/*', {
      statusCode: 200,
      body: {
        id: 1,
        name: 'QA Automation',
        email: 'qa@automation.com',
        body: 'Mocked response'
      }
    }).as('mockComment')

    cy.visit('https://example.cypress.io/commands/network-requests')
  })

  it('Should display mocked API response', () => {

    cy.contains('Get Comment').click()

    cy.wait('@mockComment')

    cy.contains('Mocked response').should('be.visible')
  })

})
