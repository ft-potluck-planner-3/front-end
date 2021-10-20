const nameInput = () => cy.get('input[name="username"]')
const passwordInput = () => cy.get('input[name="password"]')
const SingUpButton = () => cy.get('button')
const radioButton = () => cy.get('[type="radio"]')
 

describe('Signup App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/signup')

    })

    it('check that elements are showing',()=>{
        nameInput().should('exist')
        passwordInput().should('exist')
        SingUpButton().should('exist')
        radioButton().check('guest') 
        radioButton().check('organizer') 
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

    radioButton().check('organizer') 
    SingUpButton().click()
    })

    it('check form validation',()=>{
        nameInput()
            .should('have.value','')
            .type('ksu')
            .clear()
            .type('Ksu1')
            .clear()
            .should('have.value','')

        passwordInput()
            .should('have.value','')
            .type('Password!')
            .clear()
            .type('AnotherPassword!')
            .clear()
            .should('have.value','')

        nameInput()
            .type('ksu')
        passwordInput()
            .type('Password!!!')
    })

})


