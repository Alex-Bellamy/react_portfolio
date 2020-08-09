describe("User can see my CV", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003");
    cy.get("#cv-tab").click();
  });

  it("displays my latest role", () => {
    cy.get("#cv-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should(
        "contain",
        "Hands-on full stack developer accelerated training (Sept 2020)"
      );
      cy.get(".description").should(
        "contain",
        "18 weeks mastering the skills to become a confident junior developer. A truly whirlwind experience of more than 600 hours of blood, sweet and nearly tears but absolutely worth it in the end"
      );
    });
  }),
  
    it("displays my previous role", () => {
      cy.get("#cv-2").within(() => {
        cy.get(".image").should("exist");
        cy.get(".ui.header").should(
          "contain",
          "Business advisory, recovery and bankruptcy advisory (2008 - 2020)"
        );
        cy.get(".description").should(
          "contain",
          "Advising and managing insolvent businesses and bankrtupt individuals. Professional client-facing role at three firms over the last twelve years. I have led complex projects involving global banks and coporations, adding value for all parties at every stage"
        );
      });
    });

  it("displays my recovery qualification", () => {
    cy.get("#cv-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should(
        "contain",
        "UK qualified konkursförvaltare (2015)"
      );
      cy.get(".description").should(
        "contain",
        "Personal Insolvency - Högskola type training"
      );
    });
  });

  it("displays my school qualification", () => {
    cy.get("#cv-4").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "School education (age 14-18)");
      cy.get(".description").should(
        "contain",
        "Three A Levels - information communication services, english language and geography. 10 GCSEs including mathematics and english"
      );
    });
  });
});