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

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const categoryCreate = (name) => {
  const token = localStorage.token;
  return axios.post(
    BaseUrl + "/categories",
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const categoryGetByid = (id) => {
  const token = localStorage.token;
  return axios.get(BaseUrl + `/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const categoryUpdate = (id, name) => {
  const token = localStorage.token;
  return axios.put(
    BaseUrl + `/categories/${id}`,
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const categoryDelete = (id) => {
  const token = localStorage.token;
  return axios.delete(BaseUrl + `/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/* Questions */
export const getQuestions = () => {
  const token = localStorage.token;
  return axios.get(BaseUrl + "/questions");
};
export const questionCreate = (content, category_id, answers) => {
  const token = localStorage.token;
  return axios.post(
    BaseUrl + "/questions",
    {
      content,
      category_id,
      answers,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const questionGetById = (id) => {
  const token = localStorage.token;
  return axios.get(BaseUrl + `/questions/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const questionUpdate = (id, content, category_id, answers) => {
  const token = localStorage.token;
  return axios.put(
    BaseUrl + `/questions/${id}`,
    {
      content,
      category_id,
      answers,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const questionDelete = (id) => {
  const token = localStorage.token;
  return axios.delete(BaseUrl + `/questions/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/* Users and User Profiles */
export const getUsers = (id) => {
  const token = localStorage.token;
  return axios.get(BaseUrl + `/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
