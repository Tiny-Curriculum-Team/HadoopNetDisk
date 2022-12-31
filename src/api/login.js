import createAxios from "../utiles/request";

const api = {
  login: "/usr/login/",
  register: "/usr/signin/",
};

export default  function getLogin(loginForm) {
  return createAxios({
    url: api.login,
    method: "POST",
    data: {
      username: loginForm.username,
      password: loginForm.password,
    },
  });
}


