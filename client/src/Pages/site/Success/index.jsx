import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, getTotals } from "../../../Redux/Slice/cartSlice";
import "./style.scss";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
import Footer from "../../../Layouts/client/Footer";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <>
    <Helmet>
        <title>Success</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="full-success">
        <div className="container">
          <div className="success">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://uploads-ssl.webflow.com/6321d0d284b5b7ca3857fad3/6321d4f35eab748617c65799_logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="text">
              <p className="shopp">Shop</p>
              <h1 className="thanks">Thank you</h1>
              <p className="mattis">
                Mattis enim ut tellus elementum sagittis. Lectus quam id leo in
                vitae turpis. Lobortis scelerisque fermentum dui faucibus.
              </p>
              <button className="goMenu" onClick={() => navigate("/menu")}>
                Go Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutSuccess;

// const Container = styled.div`
//   min-height: 80vh;
//   max-width: 800px;
//   width: 100%;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   h2 {
//     margin-bottom: 0.5rem;
//     color: #029e02;
//   }
// `;
