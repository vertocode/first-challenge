describe("test Getting Start", () => {
    before(() => {
        cy.visit("http://localhost:8080/")
    })
    it('marked inputs', () => {
        cy.get('#1').type('value1{enter}')
        cy.get('#2').type('value2{enter}')
        cy.get('#3').type('10.000')
        cy.get('#4').type('200')
        cy.get('#4').type('{backspace}{backspace}{backspace}')
        cy.get('#4').type('50')
        cy.contains('Next')
    })
})
