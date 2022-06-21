import axios from "axios";

export function fetchProducts(categoryId) {
  return axios.get(`http://e-stroi.kz:8082/catalog/client/item?categoryId=${categoryId}`).then(res => res.data)
}

