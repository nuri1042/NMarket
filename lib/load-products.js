export async function loadProducts() {
  const product = await fetch("http://localhost:3000/api/getProductInfo").then(
    (res) => res.json()
  );
  return product;
}
