import createAxios from "../utiles/request";

const api = {
  register: "/usr/signin/",
};

export default function getRegistor(registerForm) {
    return createAxios({
      url: api.register,
      method: "POST",
      data: {
        username: registerForm.username,
        password1: registerForm.password1,
        password2: registerForm.password2,
        avatar: registerForm.avatar,
        tele: registerForm.tele,
        birth: registerForm.birth,
      },
    });
  }