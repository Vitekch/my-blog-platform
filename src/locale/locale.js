/* eslint-disable */

const translations = {
  default: {
    LOGIN: "Войти",
    HAVE_AN_ACCOUNT: "Уже зарегистрированны?",
    HAVENT_AN_ACCOUNT: "Еще не зарегестрированы?",
    USERNAME: "Имя пользователя",
    PASSWORD: "Пароль",
    REGISTRATION: "Регистрация"
  },
  en: {
    LOGIN: "Sign In",
    HAVE_AN_ACCOUNT: "Already have an account?",
    HAVENT_AN_ACCOUNT: "Don't have an account?",
    USERNAME: "Username",
    PASSWORD: "Password",
    REGISTRATION: "Sign Up",
  },
};

export const getText = (langKey, textKey) => {
  return translations[langKey][textKey] ? translations[langKey][textKey] : translations['default'][textKey];
};