import createAxios from "../utiles/request";

const api = {
  login: "/usr/login/",
  register: "/usr/signin/",
};

export default  function getLogin(loginForm) {
  return createAxios({
    url: api.login,
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      }, 
    data: {
      username: loginForm.username,
      password: loginForm.password,
    },
  });
}


