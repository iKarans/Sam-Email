import cypress from "cypress";
import emails from "../../../src/data/emails";

describe("Testing Inbox Email", () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it("should load the inbox page with non deleted emails", () => {
        cy.get('[data-cy=mini-emails] li')
        .as("inbox-emails")

        cy.get("@inbox-emails")
        .should('have.length', emails.filter(email => !email.isDeleted).length);

        cy.get("@inbox-emails")
        .first()
        .as("inbox-emails-first")
        .should('have.class', "mini-email__active")

        const emailEntries = [
            {id: '[data-cy=inbox-email-title]', text: emails[0].title},
            {id: '[data-cy=inbox-email-name]', text: emails[0].name},
            {id: '[data-cy=inbox-email-date]', text: emails[0].date.toDateString().substring(4, 10)},
            {id: '[data-cy=inbox-email-snippet]', text: emails[0].emailContent.substring(0, 160) + "..."}
        ]
    });


    it("Should add class on focused email to make background turquoise", () => {
        cy.get('[data-cy=mini-email2]')
        .click()

        cy.get('[data-cy=mini-email2]')
        .should('have.class', "mini-email__active")

        cy.get('[data-cy=mini-email1]')
        .should('have.class', "mini-email")
    });

    it("should show the correct number of unread non deleted emails", () => {
        cy.get('[data-cy=inbox-link]')
        .should('have.text', emails.filter(email => !email.isDeleted && !email.isRead).length)
    });
});