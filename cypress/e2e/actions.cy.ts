describe('actions for the site', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('adds a new todo item', () => {
    cy.get('[name="input"]').type('ADD TO DO LIST TEST{enter}')
})

  it('checks if the new todo item is added', () => {
    cy.contains('ADD TO DO LIST TEST').should('exist').and('be.visible')
  })

  it('edits the todo item and enters the new title', () => {
    cy.contains('ADD TO DO LIST TEST').closest('div').find('button').eq(1).click()
    cy.get('[name="newTitle"]').clear().type('EDITED TO DO LIST TEST{enter}')
  });

  it('edits the todo item and presses the save button', () => {
    cy.contains('EDITED TO DO LIST TEST').closest('div').find('button').eq(1).click()
    cy.get('[name="newTitle"]').clear().type('EDITED TO DO LIST TEST2')
    cy.get('button').contains('save').click()
  })

  it('marks the todo item as completed', () => {
    cy.contains('EDITED TO DO LIST TEST2').closest('div').find('button').eq(0).click()
  })

  it('deletes the todo item', () => {
    cy.contains('EDITED TO DO LIST TEST2').closest('div').find('button').eq(2).click()
  })

  it('saves the changes without editing the title', () => {
    cy.get('[name="input"]').type('TEEEEST{enter}')
    cy.contains('TEEEEST').closest('div').find('button').eq(1).click()
    cy.get('[name="newTitle"]').clear().type('{enter}')
    cy.contains('TEEEEST').should('exist').and('be.visible')
  });
});