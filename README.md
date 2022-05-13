# TechInventory
To run test project:
Clone the repository
yarn install frontend and backend
Ensure mongodb is running:
(You could follow this guide: https://docs-v3.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html)
yarn develop backend
yarn develop frontend

Test endpoint to sell products:
curl -X POST -F 'productId=627dbe23ec45110375611bc8' -F 'qty=46' http://localhost:1337/sales/sell-product
Test endpoint to get product with the most stock (can be tested in a browser):
http://localhost:1337/products/most-stock
Test endpoint to get the most sold product:
http://localhost:1337/sales/most-sold-product
