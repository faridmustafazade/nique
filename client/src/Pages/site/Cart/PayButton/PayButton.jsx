import React from "react";
import axios from "axios";
import { url } from "../../../../Redux/Slice/api";
import useToken from "../../../../Hooks/useToken";

const PayButton = ({ cartItems }) => {
  const [token] = useToken();
  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        userId: token.user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </>
  );
};

export default PayButton;
