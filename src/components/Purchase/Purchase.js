import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Purchase = () => {
  const { user } = useAuth();
  const { productid } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://claytone-server.onrender.com/${productid}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: `${user.displayName}`, email: `${user?.email}` },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://claytone-server.onrender.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            `Hey There ${user?.displayName} Thanks for the order!`,
            "Order received Succesfully",
            "success"
          );
          reset();
        }
      });
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="mb-3">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <img src={data?.img} className="w-100" alt="" />
            </div>
            <div className="col-md-3">
              <h1>{data?.name}</h1>
              <h3>{data?.material}</h3>
              <h5 className="fw-bold">
                $ <span className="span-bg">{data?.price}</span>{" "}
              </h5>
            </div>

            <div className="form-div mt-5 col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-div-input "
                  {...register("name", { required: true, maxLength: 20 })}
                  placeholder="Name"
                />
                <input className="form-div-input " {...register("email")} />
                <input
                  className="form-div-input "
                  {...register("phoneNumber")}
                  placeholder="Phone Number"
                  required
                />
                <input
                  className="form-div-input "
                  {...register("address")}
                  placeholder="Address"
                  required
                />
                <input className="form-btn" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
