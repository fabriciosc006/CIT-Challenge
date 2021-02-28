
const elements = {

     search_bar: '#search_query_top',
     btn_submit: 'button[name="submit_search"]',
     btn_signin : 'a[class="login"]'

}

class Home {

    visit_page(){
        cy.visit('/')
    }
   
    enter_search_bar(){

        cy.get(elements.search_bar).focus().type('T-Shirt')
    }
 
    press_search_button(){

        cy.get(elements.btn_submit).click()
    }
    
    enter_pants(){
        cy.get(elements.search_bar).focus().clear()
        cy.get(elements.search_bar).focus().type('Pants')

    }

    sign_in(){
        cy.get(elements.btn_signin).click()
    }


}

export default new Home();