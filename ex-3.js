const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];
let mostPrice = [];
let result;
function getMostExpensiveProduct(products) {
  // Start coding here
  let mostExpensiveProduct = null;

  for (let i = 0; i < products.length; i++) {
    if (!mostExpensiveProduct || products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
  }

  return mostExpensiveProduct;
}

console.log(getMostExpensiveProduct(products)); // Output: { name: "Laptop", price: 1000 }