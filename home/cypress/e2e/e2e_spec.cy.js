describe("E2E Tests for whole application", () => {
  it("adds User to list, after adding a User in the UserDetailsEdit App", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#addUser").click();
    cy.get(".flex:nth-child(1) > .w-full > .w-full").click();
    cy.get(".flex:nth-child(1) > .w-full > .w-full").type("TestName");
    cy.get(".flex:nth-child(2) > .w-full > .w-full").click();
    cy.get(".flex:nth-child(2) > .w-full > .w-full").type("TestGender");
    cy.get(".flex:nth-child(3) > .w-full > .w-full").click();
    cy.get(".flex:nth-child(3) > .w-full > .w-full").type("TestCountry");
    cy.get(".flex:nth-child(4) > .w-full > .w-full").click();
    cy.get(".flex:nth-child(4) > .w-full > .w-full").type("TestHeight");
    cy.get("#saveUser").click();
    cy.get(".flex-grow > a:nth-child(1)").click();
    cy.reload();
    cy.contains("TestName").should("be.visible");
    cy.contains("TestGender").should("be.visible");
    cy.contains("TestCountry").should("be.visible");
    cy.contains("TestHeight").should("be.visible");
  });

  it("removes User from List after clicking on delete", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#addUser").click();
    cy.get(".flex:nth-child(1) > .w-full > .w-full").click();
    cy.get(".flex:nth-child(1) > .w-full > .w-full").type("TestNameDeletion");
    cy.get(".flex:nth-child(2) > .w-full > .w-full").click();
    cy.get(".flex:nth-child(2) > .w-full > .w-full").type("TestGenderDeletion");
    cy.get(".flex:nth-child(3) > .w-full > .w-full").click();
    cy.get(".flex:nth-child(3) > .w-full > .w-full").type(
      "TestCountryDeletion"
    );
    cy.get(".flex:nth-child(4) > .w-full > .w-full").click();
    cy.get(".flex:nth-child(4) > .w-full > .w-full").type("TestHeightDeletion");
    cy.get("#saveUser").click();
    cy.get(".flex-grow > a:nth-child(1)").click();
    cy.reload();
    cy.contains("TestNameDeletion").should("be.visible");

    // now delete that user

    const parent = cy.contains("td", "TestNameDeletion").parent();
    const deleteButton = parent.find("button").contains("Delete");
    deleteButton.click();
    cy.contains("td", "TestNameDeletion").should("not.exist");
  });
});
