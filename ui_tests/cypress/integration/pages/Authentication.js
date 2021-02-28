
const elements = {

    txb_email_ca: 'input#email_create',
    btn_create_account: 'button#SubmitCreate',
    rdtbn_mr: 'input[id="id_gender1"]',
    txb_firstname: '#customer_firstname',
    txb_lastname: 'input[id=customer_lastname]',
    txb_password: '#passwd',
    txb_email_ar: 'form[id="login_form"] input[id="email"]',
    txb_password_ar: 'form[id="login_form"] input[id="passwd"]',
    btn_submitlogin: 'button#SubmitLogin',
    btn_order_history : 'a[title="Orders"]'

}

class AuthenticationPage {

    insert_email_ca(email){
        cy.get(elements.txb_email_ca).focus().type(email)
    }
    
    create_account(){
        cy.get(elements.btn_create_account).click()
    }

    provide_personal_info(firstname){
         cy.get(elements.rdtbn_mr).click();
         cy.get(elements.txb_firstname).focus().type(firstname);
         
    }

    enter_email_password(){
       cy.get(elements.txb_email_ar).focus().type('fab@qa.com');
       cy.get(elements.txb_password_ar).focus().type('12345');
     }

    click_submit_btn(){
        cy.get(elements.btn_submitlogin).click();

    }

    click_history(){
        cy.get(elements.btn_order_history).click();
    }

}

export default new AuthenticationPage();