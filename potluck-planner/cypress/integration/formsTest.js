describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  
describe('Quotes App', () => {
    beforeEach(() => {
        // Before each test, we need fresh state!
        // aka, we don't want to rely on state
        // left over from a previous test
        cy.visit('http://localhost:3000/create');
    })
    // Getters to cut down on typing
    const potluckNameInput = () => cy.get('input[name=potluckName]');
    const dateInput = () => cy.get('input[name=date]');

    const foobarInput = () => cy.get('input[name=foobar]');
    const timeInput = () => cy.get('input[name=time]');
    const locationInput = () => cy.get('input[name=location]');

    const foodInput = () => cy.get('input[name=food]');
    const buttonInput = () => cy.get("button[id='button']");


it('sanity check to make sure tests work', () => {
    // "it" is a test
    // "expect" is an assertion
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({}); // strict ===
    expect({}).to.eql({}); // not strict ==
})
it('the proper elements are showing', () => {
    potluckNameInput().should('exist');
    foobarInput().should('not.exist');
    dateInput().should('exist');
    timeInput().should('exist');
    locationInput().should('exist');
    foodInput().should('exist');


    buttonInput().should('exist');

    buttonInput().should('exist');
  
})

})
