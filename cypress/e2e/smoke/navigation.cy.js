describe('Navigation validations', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display Commands dropdown menu', () => {
    cy.contains('Commands').click()
    cy.get('.dropdown-menu').should('be.visible')
    })


  it('Should validate Assertions page', () => {
     cy.contains('Commands').click()
  cy.contains('Assertions').click({ force: true })
    cy.url().should('include', '/commands/assertions')
    cy.contains('Implicit Assertions').should('exist')
  })

  it('Validar que la seccion Cookies Existe',()=> {
    cy.contains('Utilities').click()
    cy.url().should('include', '/utilities')
    cy.contains('Cookies').should('exist')
  })

  it('Navegar a la pagina de Cypress API',()=>{
    cy.contains('Cypress API').click()
    cy.url().should('include', '/cypress-api')
    cy.contains('Cypress API').should('exist')
  })

})
