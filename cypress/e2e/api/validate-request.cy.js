describe('API Request validation', () => {

  beforeEach(() => {
    cy.intercept('POST', '**/comments').as('postComment')
    cy.visit('https://example.cypress.io/commands/network-requests')
  })

  it('Should validate POST request payload', () => {

    cy.contains('Post Comment').click()

    cy.wait('@postComment').then((interception) => {
      expect(interception.request.method).to.eq('POST')
      expect(interception.request.headers).to.have.property('content-type')
    })
  })

})
