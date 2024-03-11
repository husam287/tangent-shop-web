import { PaginatedResponse } from "../@types/general";
import { GetProductParams, Product } from "../@types/product";
import DomainUrl from "../Domain";
import LIMIT from "../limit";

const getProducts = (params: GetProductParams): Promise<PaginatedResponse & { products: Product[] }> => {
  const url = new URL(`${DomainUrl}/products`)
  url.searchParams.append("limit", `${LIMIT || params.limit}`)
  url.searchParams.append("skip", `${params.skip || 0}`)

  return fetch(url.href).then(res => res.json())
}


export {
  getProducts
}