const nameInput = () => cy.get('input[name="username"]')
const passwordInput = () => cy.get('input[name="password"]')
const logInButton = () => cy.get('button')



describe('Signup App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/login')
    })
    it('check that elements are showing',()=>{
        nameInput().should('exist')
        passwordInput().should('exist')
        logInButton().should('exist')
    })

    it('check that text can be written',()=>{
        nameInput()
            .should('have.value','')
            .type('Testing the name input')
            .should('have.value','Testing the name input')

        passwordInput()
            .should('have.value','')
            .type('Password!')
            .should('have.value','Password!')
    })
    it('check that submit button can be clicked',()=>{
            nameInput()
            .should('have.value','')
            .type('Testing the name input')
            .should('have.value','Testing the name input')

        passwordInput()
            .should('have.value','')
            .type('Password!')
            .should('have.value','Password!')

        logInButton().click()
    })
})