import axios from "axios";

const BaseUrl = "http://127.0.0.1:8000/api";

export const login = (email, password) => {
  return axios.post(BaseUrl + "/auth/login", {
    email,
    password,
  });
};

export const register = (name, email, password) => {
  return axios.post(BaseUrl + "/auth/register", { name, email, password });
};

export const checkToken = () => {
  const token = localStorage.token;

  return axios.post(
    BaseUrl + "/auth/me",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const categories = () => {
  const token = localStorage.token;
  return axios.get(
    BaseUrl + "/categories",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const categoryCreate = (name) => {
  return axios.post(BaseUrl + "/categories", { name });
};
export const categoryGetByid = (id) => {
  return axios.get(BaseUrl + `/categories/${id}`);
};
export const categoryUpdate = (id, name) => {
  return axios.put(BaseUrl + `/categories/${id}`, { name });
};
export const categoryDelete = (id) => {
  return axios.delete(BaseUrl + `/categories/${id}`);
};

/* Questions */
export const getQuestions = () => {
  return axios.get(BaseUrl + "/questions");
};
export const questionCreate = (content, category_id, answers) => {
  return axios.post(BaseUrl + "/questions", {
    content,
    category_id,
    answers,
  });
};

export const questionGetById = (id) => {
  return axios.get(BaseUrl + `/questions/${id}`);
};

export const questionUpdate = (id, content, category_id, answers) => {
  return axios.put(BaseUrl + `/questions/${id}`, {
    content,
    category_id,
    answers,
  });
};

export const questionDelete = (id) => {
  return axios.delete(BaseUrl + `/questions/${id}`);
};

/* Users and User Profiles */
export const getUsers = (id) => {
  return axios.get(BaseUrl + `/users/${id}`);
};
