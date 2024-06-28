import { Product, Products } from "../model/product";


const URL = 'http://localhost:3002/bp/';

/* export async function getProductss(
  username: string,
): Promise<UserGithub | undefined> {
  try {
    const response = await fetch(`${URL}/${username}`);
    const responseData = await response.json();
    return responseData as UserGithub;
  } catch (error) {}
} */

export async function getProducts() {
  try {
    const response = await fetch(`${URL}/products`);
    const responseData: any = await response.json();
    return responseData as Products;
  } catch (error) {
    console.log(error)
  }
}

export async function saveProduct(product: Product) {
  try {
    const response = await fetch(`${URL}/products`, {
      method: 'POST',
      body: JSON.stringify(product),
    });
    const responseData = await response.json();
  } catch (error) {
    console.log(error)
  }
}

export async function updateProduct(product: Product) {
  try {
    const response = await fetch(`${URL}/products`, {
      method: 'PUT',
      body: JSON.stringify(product),
    });
    const responseData = await response.json();
  } catch (error) {
    console.log(error)
  }
}
