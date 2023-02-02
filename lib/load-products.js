export async function loadProducts() {
  const product = await fetch(
    "https://nmarket.vercel.app/api/getProductInfo"
  ).then((res) => res.json());
  return product;
}
