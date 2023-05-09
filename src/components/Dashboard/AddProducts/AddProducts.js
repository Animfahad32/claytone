import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const AddProducts = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://claytone-server.onrender.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            `Hey There ${user?.displayName} Thanks for adding a product`,
            "Added Successfully",
            "success"
          );
          reset();
        }
      });
  };
  return (
    <div className="container text-center mt-5">
      <div className="chose-head ">
        <h2>Add Products</h2>
      </div>
      <div className="form-div mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-div-input "
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Product Name"
          />
          <input
            className="form-div-input "
            {...register("material")}
            placeholder="Material"
          />
          <input
            className="form-div-input "
            {...register("img")}
            placeholder="Image Url"
          />
          <input
            className="form-div-input "
            type="number"
            {...register("price")}
            placeholder="Estd. Price"
          />
          <input className="form-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
