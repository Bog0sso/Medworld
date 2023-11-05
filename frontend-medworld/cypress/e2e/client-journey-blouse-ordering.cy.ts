// purpose: test risk administrator journey to create a new risk.
// 1. create process
// 2. create risk
const FRONT_END_URL = 'http://localhost:5173';
describe('Testing user journey to order a product : BLOUSE', () => {
	context('Context: Add a new process', () => {
		// Navigate to process add page
		it('Add a new process then navigate to processes page', () => {
			cy.visit(`${FRONT_END_URL}/commande-blouse`);

			// Client informations
			cy.get('#prenom')
							.click()
							.wait(50)
							.focus()
							.type('Abdoulaye', { force: true })
							.should('have.value', 'Abdoulaye');


			cy.get('#nom')
						.click()
						.focus()
						.type('SAMBE', {force: true})
						.should('have.value','SAMBE');

			cy.get('#sexe')
							.select('Homme')
							.should('have.value','true')
							
			cy.get('#telephone')
							.type('775160095')
							.should('have.value','775160095');

			cy.get('#logo')
							.type('École Supérieure Polytechnique')
							.should('have.value','École Supérieure Polytechnique');

			// Outfit informations
			cy.get('#modele').select('Classic').should('have.value','Classic');
			cy.get('#epaule').clear().type('76').should('have.value','76');
			cy.get('#cou').clear().type('29').should('have.value','29');
			cy.get('#poitrine').clear().type('156').should('have.value','156');
			cy.get('#manche').clear().type('110').should('have.value','110');
			cy.get('#tourManche').clear().type('18').should('have.value','18');
			cy.get('#tourFesse').clear().type('54').should('have.value','54');
			cy.get('#longueur-blouse').clear().type('120').should('have.value','120');
			cy.get('#couleur').select('Bleu').should('have.value','bleu');
			cy.get('#couleur-bordure').select('Rouge').should('have.value','rouge');
			cy.get('#commander-blouse').click();
		});
	});
});

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
