export async function loadProducts() {
  const product = await fetch("/api/getProductInfo").then((res) => res.json());
  return product;
}
