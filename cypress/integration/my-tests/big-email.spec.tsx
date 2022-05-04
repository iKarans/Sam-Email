import cypress from "cypress";
import emails from "../../../src/data/emails";

describe("Testing Inbox Email", () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it("should load the big email page with first email in array", () => {
        //Do for others
        cy.get('[data-cy=big-email1]')
        .find('.big-email__name')
        .should('have.text', emails[0].name)
    });

    it("should load the corresponding big email when mini email clicked", () => {
        cy.get('[data-cy=mini-email2]')
        .click()

        cy.get('[data-cy=big-email2]')
        .should('exist')
        .find('[data-cy=big-email2-title]')
        .should('have.text', 'Can you take a look at the recent project proposals? 2')
        
    });

    it("Should be able to delete the email", () => {

        cy.get('[data-cy=big-email1]')
        .find('[data-cy=big-email-delete-button]')
        .click()

        cy.get('[data-cy=trash-link]')
        .should('have.text', "1")

        cy.get('[data-cy=inbox-link]')
        .should('have.text', "4")

        cy.get('[data-cy=big-email1]')
        .should('not.exist')

        cy.get('[data-cy=big-email]')
        .should('exist')
        .and('have.text', "Nothing to see here")
    });

    it("Should be able to mark email as read", () => {

        cy.get('[data-cy=big-email1]')
        .find('[data-cy=big-email-read-button]')
        .click()

        cy.get('[data-cy=inbox-link]')
        .should('have.text', '4')

    });
});