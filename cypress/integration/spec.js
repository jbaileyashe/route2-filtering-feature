/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.route2("POST", "/graphql", {
      statusCode: 200,
      body: 'it worked!'
    }).as("graphql")
    cy.visit('cypress/integration/index.html')
    cy.wait("@graphql", { timeout: 10000 }).then(({ request }) =>  {
      console.log(`${JSON.stringify(request)}`)
      const { operationName } = JSON.parse(request.body)
      expect(operationName).to.equal("op2")
    })
  })
})
