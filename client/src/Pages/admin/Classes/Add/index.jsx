import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddForm } from "./schema/AddForm";
import "./style.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useToken from "../../../../Hooks/useToken";
import { Helmet } from "react-helmet";
import favicon from "../../../../Assets/Images/favicon.jpg";
import { toast } from "react-toastify";
import { Base_Url } from "../../../../api/Base_Url";

const AddClasses = () => {
  const [token] = useToken();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddForm),
  });

  const postData = () => {
    const values = getValues();
    console.log(values);
    axios
      .post(`${Base_Url}/api/classes`, {
        chefImage: values.chefImage,
        chefName: values.chefName,
        chefAbout: values.chefAbout,
        class: values.class,
        type: values.type,
        price: values.price,
        about: values.about,
        image: values.image,
      })
      .then((res) => {
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 1000,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 1000,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Add-Class</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      {!token?.token ? (
        navigate("/login-admin")
      ) : token?.user?.isAdmin === true ? (
        <div className="add-full">
          <Aside />
          <div className="side-right">
            <Header />
            <div className="side-down">
              <h1 className="down-h1">Add Class</h1>
              <form onSubmit={handleSubmit(postData)} className="white-div">
                <div>
                  <label>Enter chef image</label>
                  <input
                    {...register("chefImage")}
                    placeholder="Enter chef image"
                  />
                  {errors.chefImage?.message && (
                    <p style={{ color: "#face8d" }}>
                      {errors.chefImage?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Enter chef name</label>
                  <input
                    {...register("chefName")}
                    placeholder="Enter chef name"
                  />
                  {errors.chefName?.message && (
                    <p style={{ color: "#face8d" }}>
                      {errors.chefName?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Enter chef about</label>
                  <input
                    {...register("chefAbout")}
                    placeholder="Enter chef about"
                  />
                  {errors.chefAbout?.message && (
                    <p style={{ color: "#face8d" }}>
                      {errors.chefAbout?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Enter class</label>
                  <input {...register("class")} placeholder="Enter class" />
                  {errors.class?.message && (
                    <p style={{ color: "#face8d" }}>{errors.class?.message}</p>
                  )}
                </div>
                <div>
                  <label>Enter tpye</label>
                  <input {...register("type")} placeholder="Enter type" />
                  {errors.type?.message && (
                    <p style={{ color: "#face8d" }}>{errors.type?.message}</p>
                  )}
                </div>
                <div>
                  <label>Enter price</label>
                  <input {...register("price")} placeholder="Enter price" />
                  {errors.price?.message && (
                    <p style={{ color: "#face8d" }}>{errors.price?.message}</p>
                  )}
                </div>
                <div>
                  <label>Enter about</label>
                  <input {...register("about")} placeholder="Enter about" />
                  {errors.about?.message && (
                    <p style={{ color: "#face8d" }}>{errors.about?.message}</p>
                  )}
                </div>
                <div>
                  <label>Enter class image</label>
                  <input
                    {...register("image")}
                    placeholder="Enter class image"
                  />
                  {errors.image?.message && (
                    <p style={{ color: "#face8d" }}>{errors.image?.message}</p>
                  )}
                </div>

                <button className="editing" type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        navigate("/login-admin")
      )}
    </>
  );
};

export default AddClasses;
