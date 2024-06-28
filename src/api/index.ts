import { Product, ProductRequest, Products, ResponseData } from "../model/product";


const URL = 'http://localhost:3002/bp';

export async function getProducts() {
  try {
    const response = await fetch(`${URL}/products`);
    const responseData: ResponseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.log(error)
  }
}

export async function saveProduct(product: Product) {
  try {
    const response = await fetch(`http://localhost:3002/bp/products`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.log(error)
  }
}

export async function updateProduct(product: Product) {
  try {
    const response = await fetch(`${URL}/products/${product.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.log(error)
  }
}

export async function deleteProduct(id: string) {
  try {
    const response = await fetch(`${URL}/products/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  } catch (error) {
    console.log(error)
  }
}
