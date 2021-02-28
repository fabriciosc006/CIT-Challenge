import Home from '../pages/Home'
import AuthenticationPage from '../pages/Authentication'

Given(/^acess the principal page$/, () => {
	Home.visit_page();
});


When(/^click in Sign in$/, () => {
	Home.sign_in();
});


When(/^enter email adress$/, () => {
	AuthenticationPage.insert_email_ca('fab1@qa.com');
    
});


When(/^press in create an account$/, () => {
	AuthenticationPage.create_account();
});


When(/^provide personal infomations$/, () => {
	
    AuthenticationPage.provide_personal_info('manel');
    
});


When(/^click in Register$/, () => {
	console.log('clicar in register')
});


Then(/^go to user dashboard$/, () => {
	console.log('faltando ciar user tb')
});


When(/^enter email and password$/, () => {
	AuthenticationPage.enter_email_password();
});


When(/^press in sign in$/, () => {
	AuthenticationPage.click_submit_btn();
});


Then(/^user can acess account$/, () => {
	    
    cy.get('h1.page-heading').should(($div) => {
        const text3 = $div.text()
      
        expect(text3).to.match(/My account/)
    })    
    
});


When(/^click in order history and details$/, () => {
	 AuthenticationPage.click_history();
});


Then(/^user can check order history$/, () => {
	  
    cy.get('p[class="alert alert-warning"]').should(($div) => {
        const text3 = $div.text()
      
        expect(text3).to.match(/orders/)
    })    

});
