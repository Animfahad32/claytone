import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://claytone-server.vercel.app/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);
  const handleConfirm = (id) => {
    swal({
      title: "Are you sure you want to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const handleDelete = (id) => {
          const url = `https://claytone-server.vercel.app/orders/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const remaining = orders.filter(
                (allorders) => allorders._id !== id
              );
              setOrders(remaining);
            });
        };

        handleDelete(id);
        swal("You deleted the order", {
          icon: "success",
        });
      } else {
        swal("Awesome! ");
      }
    });
  };
  return (
    <div>
      <h2 className="text-center">Manage All Orders</h2>
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
            {orders.map((order) => (
              <tbody key={order?._id} className="tbody-style">
                <tr>
                  <th scope="row" className="text-center">
                    {order?._id}
                  </th>
                  <td className="text-center">{order?.name}</td>
                  <td className="text-center">{order?.email}</td>
                  <td className="text-center">{order?.phoneNumber}</td>
                  <td className="text-center">{order?.address}</td>
                  <td className="text-center">
                    {" "}
                    <button
                      onClick={() => handleConfirm(order?._id)}
                      className="allproduct-btn"
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
