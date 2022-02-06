describe('Select Service', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('checks all checkboxes with one command', () => {
    cy.get('input[type="checkbox"]').as('checkboxes').check({ force: true });
    cy.get('@checkboxes').each((checkbox) => {
      expect(checkbox[0].checked).to.equal(true);
    });
  });
});
