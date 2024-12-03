describe('Pesquisar o endereço solicitado', () => {
    it('Deve buscar o endereço informado', () => {
      cy.visit('https://www.ze.delivery/');
      cy.get('#age-gate-button-yes').click();
      cy.get('#onetrust-accept-btn-handler').click();
      cy.get('body').click();
      cy.get('input[name="address-search-input-address"]').type('Rua Ibitirama 1810');   
      cy.get('[data-testid="auto-complete-address-Rua Ibitirama, 1810-Vila Prudente, São Paulo - SP, Brasil"] > .css-13udsys').click();
      cy.get('input[name="address-complement"]').type('Apto');
      cy.get('#address-details-button-continue').click();    
    })
  })