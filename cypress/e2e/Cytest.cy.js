describe('Cytest.cy.js', () => {
  

const productsEndpoint = 'https://dummyjson.com/products';

  it('GET request to products endpoint', () => {
   cy.request('GET',productsEndpoint)
    .then((response) => {
     expect(response.status).to.equal(200);
     expect(response.body).to.have.property('products');
    });
  });


 it('checks for specific properties in the response body', () => {
  cy.request('GET', productsEndpoint)
  .then((response) => {
    const products = response.body.products;
    expect(products[0]).to.have.property('title');
    expect(products[0]).to.have.property('price');
    expect(products[0]).to.have.property('description');
  });
});

it('checks the number of items in the response body', () => {
  cy.request('GET', productsEndpoint)
   .then((response) => {
    expect(response.body.products).to.have.length(30);
   });
 });


});
