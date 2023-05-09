import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [myOrders, setMyorders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://claytone-server.onrender.com/orders")
      .then((response) => response.json())
      .then((data) => setMyorders(data));
  }, []);

  const exactOrders = myOrders.filter((td) => td.email === user?.email);
  console.log(exactOrders);

  const handleConfirm = (id) => {
    swal({
      title: "Are you sure you want to cancel the order?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const handleDelete = (id) => {
          const url = `https://claytone-server.onrender.com/orders/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const remaining = myOrders.filter(
                (myOrder) => myOrder._id !== id
              );
              setMyorders(remaining);
            });
        };

        handleDelete(id);
        swal("You canceled the order", {
          icon: "success",
        });
      } else {
        swal("Awesome! ");
      }
    });
  };

  return (
    <div>
      <h2>MyOrders</h2>

      <div className="container-fluid mt-5">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="thead-style">
              <tr>
                <th scope="col" className="text-center">
                  ID
                </th>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  Email
                </th>
                <th scope="col" className="text-center">
                  Phone Number
                </th>
                <th scope="col" className="text-center">
                  Address
                </th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="tbody-style">
              {exactOrders.map((exactOrder) => (
                <tr key={exactOrder?._id}>
                  <th scope="row" className="text-center">
                    {exactOrder?._id}
                  </th>
                  <td className="text-center">{exactOrder?.name}</td>
                  <td className="text-center">{exactOrder?.email}</td>
                  <td className="text-center">{exactOrder?.phoneNumber}</td>
                  <td>{exactOrder?.address}</td>
                  <td className="text-center">
                    {" "}
                    <button
                      onClick={() => handleConfirm(exactOrder?._id)}
                      className="allproduct-btn"
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
