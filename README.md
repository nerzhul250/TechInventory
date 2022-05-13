# TechInventory

## To run test project:

1. Clone the repository

2. yarn install frontend and backend

3. Ensure mongodb is running:
(You could follow this guide: https://docs-v3.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html)

4. yarn develop backend

5. yarn develop frontend

## Test enpoints

1. Test endpoint to sell products:
curl -X POST -F 'productId=627dbe23ec45110375611bc8' -F 'qty=46' http://localhost:1337/sales/sell-product

2. Test endpoint to get product with the most stock (can be tested in a browser):
http://localhost:1337/products/most-stock

3. Test endpoint to get the most sold product:
http://localhost:1337/sales/most-sold-product

## Special thanks to:

https://strapi.io/starters/strapi-starter-gatsby-catalog
