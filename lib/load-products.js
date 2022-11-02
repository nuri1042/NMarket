export async function loadProducts() {
  const product = await fetch(
    "https://nmarket-ten.vercel.app/api/getProductInfo"
  ).then((res) => res.json());
  return product;
}
