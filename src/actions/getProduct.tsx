//Types
import { Product } from "@/types/data";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// Get Single Product By Id
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
