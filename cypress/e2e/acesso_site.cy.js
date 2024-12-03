describe('Acessar a página', () => {
  it('Deve acessar', () => {
    cy.visit('https://www.ze.delivery/');
    cy.get('#age-gate-button-yes').click();       
  })
})