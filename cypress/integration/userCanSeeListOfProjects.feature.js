describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003");
    cy.get("#projects-tab").click();
  });

  it("displays first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "My first website");
      cy.get(".description").should(
        "contain",
        "The first website to make it out into the world when I started at Craft Academy"
      );
    });
  });

  it("displays second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "Fizz buzz challenge");
      cy.get(".description").should(
        "contain",
        "A children's game and classic challenge harnessing my new Ruby skills"
      );
    });
  });

  it("displays third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "Bmi calculator");
      cy.get(".description").should(
        "contain",
        "For the fitness enthusiasts out there, this is first of two BMI calculators"
      );
    });
  });
});