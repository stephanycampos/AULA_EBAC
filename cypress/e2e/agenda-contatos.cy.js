describe('Agenda de Contatos - EBAC', () => {

  const nomeInicial = 'Contato Cypress'
  const nomeEditado = 'Contato Cypress Editado'
  const email = 'cypress@teste.com'
  const telefone = '11999999999'

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve incluir um contato', () => {
    cy.get('input[placeholder="Nome"]').type(nomeInicial)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.contains('Adicionar').click()
    
    cy.contains(nomeInicial).should('exist')
    cy.contains(email).should('exist')
  })

  it('Deve alterar um contato', () => {
    cy.contains(nomeInicial)
      .parents('.contato')
      .find('button.edit')
      .click()
    cy.get('input[placeholder="Nome"]').clear().type(nomeEditado)
    cy.contains('Salvar').click()

    cy.contains(nomeEditado).should('exist')
  })

  it('Deve remover um contato editado', () => {
    cy.contains(nomeEditado)
      .parents('.contato')
      .find('button.delete')
      .click()
    
    cy.contains(nomeEditado, { timeout: 4000 }).should('not.exist')
  })

})
