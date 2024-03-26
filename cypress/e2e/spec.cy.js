describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('assignment', () => {
  it('types name', () => {

    cy.visit('http://localhost:8888/')
    cy.get("input").type("Cypress")
    cy.contains("Start Game!").click()
    cy.get("#user-selection.custom-select").select("Paper")
    cy.contains("Go!").click()

    
    cy.get("#game-history").should(($game) => {
      expect($game).to.include.text('Cypress')
    });


  })
})
