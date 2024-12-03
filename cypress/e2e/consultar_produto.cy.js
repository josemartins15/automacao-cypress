describe('Consultar o produto', () => {
  beforeEach(() => {
    cy.visit('https://www.ze.delivery/');
    cy.get('#age-gate-button-yes').click();
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('body').click();
    cy.get('input[name="address-search-input-address"]').type('Rua Ibitirama 1810');   
    cy.get('[data-testid="auto-complete-address-Rua Ibitirama, 1810-Vila Prudente, São Paulo - SP, Brasil"] > .css-13udsys').click();

    })
    it('Deve pesquisar um produto na tela inicial', () => { 
      cy.get('input[name="address-complement"]').type('Apto');
      cy.get('#address-details-button-continue').click();
      cy.get('[data-testid="category-Não alcoólicos"] > .css-982c2i > .css-1tki7py > .css-1pc0fbl > .css-0').click();
    })
  })
