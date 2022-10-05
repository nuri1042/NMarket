export async function loadProducts() {
  const product = await fetch(
    "https://nmarket-ra8a-iwvp7g631-nuri1042.vercel.app/api/getProductInfo"
  ).then((res) => res.json());
  return product;
}
