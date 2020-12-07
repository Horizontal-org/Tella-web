describe('Cypress test example', () => {
  it('Find Wikipedia on Google', () => {
    cy.visit('https://google.com')
    cy.get('input[type="text"]').type('Wikipedia').type('{enter}')

    cy.contains('Wikipedia')
  })
})
