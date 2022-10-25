import { createProductsDataClient } from '@my-products/products-data-client';

main();

async function main() {
  const productsDataClient = createProductsDataClient();
  const id = getProvidedId();
  if (id != null) {
    const product = await productsDataClient.getProductById(id);
    console.log(JSON.stringify(product, null, 2));
  } else {
    const products = await productsDataClient.getProducts();
    console.log(JSON.stringify(products, null, 2));
  }
}

function getProvidedId() {
  return process.argv[2];
}
