/// <reference types="cypress" />

import {navigate, addTodo, validateTodoTxt} from "../../page-objects/todo-page";

describe('Acessar Google', () => {
    // beforeEach(() =>{
    //     navigate('https://www.google.com')
    // })

    it('Fazer busca', () =>{
        navigate('https://www.youtube.com')
        //cy.get('.gLFyf').type('Lucas Abreu')
    })
})