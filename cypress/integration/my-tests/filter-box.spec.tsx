import cypress from "cypress";
import emails from "../../../src/data/emails";

describe("Testing Dropdown filter", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("when clicked filter option should show", () => {
        cy.get("[data-cy=dropdown]").click();
        cy.get("[data-cy=dropdown-box]").should("be.visible");
        cy.get(".drop-down-filter-option").should("have.length", 2);
    })

    it("when clicked personal should show personal email and then box disappears", () => {
        cy.get("[data-cy=dropdown]").click();

        cy.get("[data-cy=dropdown-box]")
        .find("[data-cy=dropdown-box-personal]")
        .check()

        cy.get("[data-cy=dropdown-box]").should("not.exist");

        cy.get('[data-cy=mini-emails] li')
        .as("inbox-emails")

        cy.get("@inbox-emails")
        .first()
        .contains("karan Sivalingam")
    })

    it.only("it should handle multiple filters", () => {
        cy.get("[data-cy=dropdown]").click();

        cy.get("[data-cy=dropdown-box]")
        .find("[data-cy=dropdown-box-personal]")
        .check()

        cy.get("[data-cy=dropdown]").click();

        cy.get("[data-cy=dropdown-box]")
        .find("[data-cy=dropdown-box-oldest]")
        .check()

        cy.get("[data-cy=dropdown-box]").should("not.exist");

        cy.get('[data-cy=mini-emails] li')
        .as("inbox-emails")

        cy.get("@inbox-emails")
        .first()
        .contains("Mar 02")
    })
})