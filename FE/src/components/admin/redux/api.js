import apiBase from "../../../common/baseAPI";
import { ParseSimpleEndpoint } from "../../../helpers/ParseEndpoint";

const CATEGORY = "categories";
const PRODUCER = "producers";

const getListCategories = (data) => {
  return new Promise((resolve, reject) => {
    return apiBase
    .get(`${CATEGORY}/all-categories?${ParseSimpleEndpoint(data.payload)}`)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
  })
};

const createCategory = (data) => {
  return new Promise((resolve, reject) => {
    return apiBase
    .post(`${CATEGORY}/create`, data)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
  })
};

const updateCategory = (data) => {
  return new Promise((resolve, reject) => {
    return apiBase
    .put(`${CATEGORY}/edit/${data.id}`, data)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
  })
};

const getListProducer = (data) => {
  return new Promise((resolve, reject) => {
    return apiBase
    .get(`${PRODUCER}/all-producers?${ParseSimpleEndpoint(data.payload)}`)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
  })
};

const createProducer = (data) => {
  return new Promise((resolve, reject) => {
    return apiBase
    .post(`${PRODUCER}/create`, data)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
  })
};

const updateProducer = (data) => {
  return new Promise((resolve, reject) => {
    return apiBase
    .put(`${PRODUCER}/edit/${data.id}`, data)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
  })
};

export {
  getListCategories,
  createCategory,
  updateCategory,
  getListProducer,
  createProducer,
  updateProducer
}