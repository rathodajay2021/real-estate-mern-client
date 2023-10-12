import axios from "axios";

//ROUTE BEFORE LOGIN
export const URL_SIGN_IN = "/sign-in";
export const URL_SIGN_UP = "/sign-up";

//ROUTE AFTER LOGIN
export const URL_HOME_PAGE = "/";
export const URL_HOME = "/home";
export const URL_ABOUT = "/about";
export const URL_PROFILE = "/profile";

export const DEFAULT_URL = "http://localhost:3458/";

export const AXIOS_API = axios.create({baseURL: DEFAULT_URL})

export const API_URL = {
  SIGN_UP: "/user/signup",
  SIGN_IN: "/user/sign-in",
};
