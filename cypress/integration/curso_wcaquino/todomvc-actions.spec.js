// /// <reference types="cypress" />

// import {navigate, addTodo, validateTodoTxt} from "../page-objects/todo-page";

// describe('Todo Actions', () =>{
//     beforeEach(() =>{
//         navigate('http://todomvc-app-for-testing.surge.sh/')
//         addTodo('Clean room')
//     })
//     it('should be able to add a new todo to the list', () => {
//         validateTodoTxt('Clean room')
//         cy.get('.toggle').should('not.be.checked')
//       })
      
//       it('Seconde Test', ()=> {
//           cy.get('.toggle').click()
//           cy.get('label').should('have.css', 'text-decoration-line', 'line-through')  
//       })
      
//       it('Third Test', () =>{
//           cy.get('.toggle').click()
//           cy.contains('Clear completed').click()
//           cy.get('.todo-list').should('not.have.descendants', 'li')
//       })
// })
