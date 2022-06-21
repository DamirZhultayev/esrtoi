import axios from "axios";

export function fetchCategories() {
  return axios.get(`http://e-stroi.kz:8082/catalog/client/category/all?lang=ru`).then(res => res.data)
}

