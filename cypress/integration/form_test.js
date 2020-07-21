describe("form test", () => {
  it("test that the form is working properly", () => {
    cy.visit(("/pizza"))

    const name = "Allan Oliveira"
    cy.get("[data-cy=name]")
    .type(name)
    .should("have.value", name)

    const email = "allan@gmail.com"
    cy.get("[data-cy=email]")
    .type(email)
    .should("have.value", email)

    cy.get("[data-cy=size]")
    .select("small")
    .should("have.value", "small")

    const instructions = "no peppers and extra cheese please"
    cy.get("[data-cy=instructions]")
    .type(instructions)
    .should("have.value", instructions)

    cy.get("[data-cy=bacon]")
    .check()

    cy.get("[data-cy=onions]")
    .check()

    cy.get("[data-cy=button]")
    .click()
  })
})