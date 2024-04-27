import axios from "axios";
import { toast } from "react-toastify";
import { Base_Url } from "../../api/Base_Url";

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${Base_Url}/api/register`, authData);
    dispatch({ type: "REGISTER", payload: data });

    window.location = "/admin";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 1000,
    });
  }
};
export const registerActions = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${Base_Url}/api/register`, authData);
    dispatch({ type: "REGISTER", payload: data });

    window.location = "/sign-in";
    toast.success("Register successfully", {
      position: "top-right",
      autoClose: 1000,
    });
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 1000,
    });
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${Base_Url}/api/login`, authData);
    dispatch({ type: "LOGIN", payload: data });
    window.location = "/admin";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 1000,
    });
  }
};
export const loginActions = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${Base_Url}/api/login`, authData);
    dispatch({ type: "LOGIN", payload: data });
    window.location = "/";
    toast.success("Login successfully", {
      position: "top-right",
      autoClose: 1000,
    });
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 1000,
    });
  }
};
