class newpassword {

    setnewpassword(npassword) {
        cy.get('#newpassword').type('Neilsoft@100{enter}');
}
    setoldpassword(opassword) {
        cy.get('#reenterpassword').type('Neilsoft@100{enter}');
}
}

export default newpassword; 
