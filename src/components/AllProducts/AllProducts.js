import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './AllProducts.css';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://animfahad32.github.io/fakeData/clayproducts.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])
    return (
        <>
        <Navigation></Navigation>
        <div className="bg-clr p-1">
             <div className="container mt-5">
                <h1 className="headers-title">Products</h1>
            </div>
        </div>

        <div className="container mb-3">
       <div className="row">
        {
            allProducts.map(allProduct =>
                <div key={allProduct.id} className="col-md-4">
                    <div className="card mt-3">
                    <img src={allProduct?.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{allProduct?.name}</h5>
                    <p className="card-text">{allProduct?.material}</p>
                    <p className="card-text price">$ {allProduct?.price}</p>
                    <button className="btn product-btn">BUY NOW</button>
                    </div>
                
                </div>
                </div>
                
                )
       }

       <div>
          
       </div>
     </div>
     
       </div>
       <Footer></Footer>
       </>
    );
};

export default AllProducts;