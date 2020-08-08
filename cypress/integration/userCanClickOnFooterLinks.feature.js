describe("User can click on footer links", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003");
  });

  it("user can navigate to GitHub", () => {
    cy.get("#github").click();
    cy.contains("Alex-Bellamy").should("be.visible");
  });

  it("user can navigate to LinkedIn", () => {
    cy.get("#linkedin").click();
    cy.url().should(
      "include",
      "https://www.linkedin.com/in/alex-bellamy-0237441b4/"
    );
  });
});
