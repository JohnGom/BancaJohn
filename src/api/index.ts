import { Products } from "../model/product";


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
  } catch (error) {}
}
