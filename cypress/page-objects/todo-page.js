/// <reference types="cypress" />

    export function navigate(navigateLink){
        cy.visit(navigateLink)
    }

    export function addTodo(todoText){
        cy.get('.new-todo').type(todoText+"{enter}")
    }

    export function validateTodoTxt(expectedText){
        cy.get('label').should('have.text', expectedText)
    }