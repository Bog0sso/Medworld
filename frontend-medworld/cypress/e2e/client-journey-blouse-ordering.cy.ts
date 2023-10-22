// purpose: test risk administrator journey to create a new risk.
// 1. create process
// 2. create risk
const FRONT_END_URL = 'http://localhost:5173'

describe('Testing user journey to order a product : BLOUSE', () => {

  context('Context: Add a new process',() => {
    // Navigate to process add page
    it('Add a new process then navigate to processes page', () => {
      cy.visit(`${FRONT_END_URL}/commande-blouse`)
    //   cy.getById('amplify-id-:r0:').select('Credit')
    //   cy.getById('amplify-id-:r2:').type('Octroi d\'un crédit immobilier	')
    //   cy.get('.amplify-grid').find('.amplify-button').eq(1).click()
    //   cy.visit(ADMIN_PROCESSES_PAGE)
    })

  })
})

//   context.only('Context: Add a new risk',() => {
    // Navigate to risk add page
    // it('Add a new process then navigate to processes page', () => {
    //   cy.visit(`${ADMIN_RISKS_PAGE}/add`) 
    //   cy.getById('amplify-id-:r0:').type('Risque')
     // cy.getById('amplify-id-:r2:')//.type('L\'emprunteur n\'est pas en mesure de rembourser son crédit immobilier.')
      // cy.getById('amplify-id-:r4:').type('Impossibilité de rembourser son crédit.')
      // cy.getById('amplify-id-:r0:').select('') // operationnal loss category
      // cy.getById('amplify-id-:r0:').select('Eleve')
      // cy.getById('amplify-id-:r0:').select('Eleve')

      // linking a process to the risk
      // cy.get('.amplify-grid').find('button').eq(0).contains('Add item').click();

      // return // locker
      // cy.get('.amplify-grid').find('.amplify-button').eq(1).click()
      // cy.visit(ADMIN_RISKS_PAGE)
