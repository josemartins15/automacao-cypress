describe('Página de pesquisa', () => {
    beforeEach(() => {
      cy.visit('https://www.ze.delivery/');
      cy.get('#age-gate-button-yes').click();
      cy.get('#onetrust-accept-btn-handler').click();
      cy.get('body').click();
      cy.get('input[name="address-search-input-address"]').type('Rua Ibitirama 1810');   
      cy.get('[data-testid="auto-complete-address-Rua Ibitirama, 1810-Vila Prudente, São Paulo - SP, Brasil"] > .css-13udsys').click();

    })

    it('Deve pesquisar um produto inválido', () => {
    
      cy.get('input[name="address-complement"]').type('Apto');
      cy.get('#address-details-button-continue').click();
      cy.get('[data-testid="search-product-input"]').type('televisao');
      cy.contains('Putz, não conseguimos encontrar o produto').should('be.visible')      
    })
  })
