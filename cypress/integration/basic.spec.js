/// <reference types="cypress" />

describe("Cypress Basics", () =>{
    beforeEach(()=>{
        cy.visit('componentes.html')
    })
    
    it('Should be acess the page and assert the title', () => {
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')

    })

    it('Should interact with an element', () =>{
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })

    it('Working with text', () =>{
        cy.get('.facilAchar')
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Workin with Buttons', () =>{
        cy.get('[href="#"]').click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')
        cy.reload()
        cy.get('#resultado').should('have.text', 'Status: Nao cadastrado')
    })
    
    it('Working with text fields', ()=>{
        cy.get('#formNome')
            .type('Lucas Abreu')
            .should('have.value', 'Lucas Abreu')
        cy.get('#elementosForm\\:sugestoes')
            .type('Luquinhas')
            .should('have.value','Luquinhas')
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Lucassss')
        cy.get('[data-cy=dataSobrenome]')
            .type('TesteLucass{backspace}', {delay : 100})
            .should('have.value', 'TesteLucas')
    })

    it('Radio Button', () =>{
        // cy.get('#formSexoMasc')
        //     .click()
        //     .should('be.checked')
        // cy.get('#formSexoFem').should('not.be.checked')

        // cy.get('[name=formComidaFavorita]').click({multiple: true})

        // cy.get('[data-test=dataEscolaridade]')
        //     .select('Superior')
        //     .should('have.value', 'superior')

        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida'])
        cy.get('[data-testid=dataEsportes]').then($el =>{
            expect($el.val()).eql(['natacao', 'Corrida'])
        })
        
    })

    it('Esperas', () =>{
        // cy.get('#buttonDelay')
        //     .click()
        // cy.get('#novoCampo')
        //     .type('Lucas')
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
    })

    it('Should vs Then...', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            expect($el).to.have.length(1)
        })
    })

    it('Working with Alert...', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('Working with Alert with Mock...', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it('Working with Confirm...', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })
    })

    it('Prompt...', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt')
        })
        cy.get('#prompt').click()
    })

    it('Desafio...', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')
        })
        cy.get('#formNome').type('Lucas')
        cy.get('#formCadastrar').click().then(() =>{
            expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')
        })
        cy.get('[data-cy=dataSobrenome]').type('Abreu')
        cy.get('#formCadastrar').click().then(() =>{
            expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')
        })
        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)',).should('have.text', 'Cadastrado!')
    })

    it.only('Iframe...', () => {
        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('Lucas')
                .should('have.value', 'Lucas')
        })
    })
})