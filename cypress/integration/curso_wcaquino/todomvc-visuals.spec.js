// /// <reference types="cypress" />

// import * as todoPage from '../page-objects/todo-page'

// describe('Visual Validation', () =>{
//     before(()=> todoPage.navigate('http://todomvc-app-for-testing.surge.sh/'))

//     beforeEach(()=> cy.eyesOpen({appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hey!'}))
//     afterEach(() => cy.eyesClose())

//     it('should look good', () => {
//         cy.eyesCheckWindow('empty todo list')
//         todoPage.addTodo('Cleam room')
//         todoPage.addTodo('Learn JS')
//         cy.eyesCheckWindow('two todos')
//     })
// })