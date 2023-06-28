import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:2003/api/register",
      authData
    );
    dispatch({ type: "REGISTER", payload: data });

    window.location = "/admin";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
export const registerActions = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:2003/api/register",
      authData
    );
    dispatch({ type: "REGISTER", payload: data });

    window.location = "/sign-in";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:2003/api/login",
      authData
    );
    dispatch({ type: "LOGIN", payload: data });
    window.location = "/admin";
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
export const loginActions = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:2003/api/login",
      authData
    );
    dispatch({ type: "LOGIN", payload: data });
    if (data.user.isAdmin === true) {
      window.location = "/admin";
    } else {
      window.location = "/";
    }
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
