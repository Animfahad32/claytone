import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const AddReviews = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://claytone-server.onrender.com/addreviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            `Hey There ${user?.displayName} Thanks for giving an honest review`,
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
        <h2>Please Give Us An Honest Review</h2>
      </div>
      <div className="form-div mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user?.displayName}
            className="form-div-input "
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Your Name"
          />
          <input
            className="form-div-input "
            {...register("text")}
            placeholder="Say About Us"
          />
          <input
            className="form-div-input "
            {...register("rating")}
            placeholder="Rating between 0 to 5"
            type="number"
          />

          <input className="form-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
