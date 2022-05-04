import cypress from "cypress";
import emails from "../../../src/data/emails";

describe("Testing Trash Email", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.get('[data-cy=trash-link]').click();
    })

    it("should take to correct url after clicking page", () => {
        cy.url().should('include', '/Trash');
    })

    it("should load the inbox page with non deleted emails", () => {
        cy.get('[data-cy=mini-emails]')
        .as("trash-emails")

        cy.get("@trash-emails")
        .find('li')
        .should('not.exist');
    });

    it("should show the correct number of unread deleted emails", () => {
        cy.get('[data-cy=trash-link]')
        .should('have.text', emails.filter(email => email.isDeleted && !email.isRead).length)
    });
});