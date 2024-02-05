import { ApiResponse } from '../models'
import { PRODUCTS_API, CATEGORIES_API } from './apiURL'

export function getProducts(): Promise<ApiResponse> {
  return fetch(`${PRODUCTS_API}/?limit=500`)
    .then((res) => res.json() as Promise<ApiResponse>)
    .then((apiResponse) => apiResponse)
}

export function getCategories(): Promise<string[]> {
  return fetch(CATEGORIES_API)
    .then((res) => res.json() as Promise<string[]>)
    .then((apiResponse) => apiResponse)
}
