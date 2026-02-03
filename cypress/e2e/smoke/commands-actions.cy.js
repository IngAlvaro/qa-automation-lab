describe('Commands menu - complex navigation validation', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Should open Commands menu and fully validate Actions page', () => {

    // Validar que el menú Commands existe
    cy.contains('Commands').should('be.visible')

    // Abrir el dropdown
    cy.contains('Commands').click()

    // Validar que el menú se despliega
    cy.get('.dropdown-menu')
      .should('exist')
      .and('have.class', 'dropdown-menu')

    // Navegar a opción hija (Actions)
    cy.contains('Actions').click({ force: true })

    // Validar navegación correcta
    cy.url().should('include', '/commands/actions')

    // Validar título principal
    cy.get('h1')
      .should('be.visible')
      .and('contain.text', 'Actions')

    // Validar que existen ejemplos funcionales
    cy.contains('type').should('exist')
    cy.contains('click').should('exist')

    // Validar estructura general
    cy.get('.container').should('exist')
  })

})
