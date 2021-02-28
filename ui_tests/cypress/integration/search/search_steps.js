import Home from '../pages/Home'


Given(/^acess the principal page$/, () => {
	Home.visit_page();
});

When(/^enter in the search bar with T-Shirt$/, () => {
	
    Home.enter_search_bar();
});

When(/^press in search button$/, () => {
	
    Home.press_search_button();

});

Then(/^returns the product searched$/, () => {
	cy.wait(2000)
    
    cy.get('a[class="product-name"][title="Faded Short Sleeve T-shirts"]').should(($div) => {
        const text = $div.text()
      
        expect(text).to.match(/Faded/)
        expect(text).to.include('Short')
        
      })

    });
    
When(/^enter in the search bar with Pants$/, () => {
        Home.enter_pants();
});
    
    
Then(/^returns no results for product search$/, () => {
	     

    cy.get('p[class="alert alert-warning"]').should(($div) => {
        const text = $div.text()
      
        expect(text).to.match(/"Pants"/)
        expect(text).to.include('No results')
        
      })
});





