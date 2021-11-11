import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://animfahad32.github.io/fakeData/clayproducts.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div id="products">
        <div className="container mt-5">
            <h1 className="headers-title">Our Featured Products</h1>
        </div>

        
       <div className="container">
       <div className="row">
        {
            products.slice(0,6).map(product =>
                <div key={product.id} className="col-md-4">
                    <div className="card mt-3">
                    <img src={product?.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <p className="card-text">{product?.material}</p>
                    <p className="card-text price">$ {product?.price}</p>
                    <Link to={`/purchase/${product?.id}`}>
                    <button className="btn product-btn">BUY NOW</button>
                    </Link>
                    </div>
                
                </div>
                </div>
                
                )
       }
     </div>
     <div className="container mt-5 text-center">
     <Link to={'/allproducts'}><button className="allproduct-btn">SEE ALL PRODUCTS</button></Link>
     </div>
       </div>
       

        </div>
    );
};

export default Products;








