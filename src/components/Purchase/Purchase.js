import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const {productid} = useParams()
    const [data, setData] = useState([])


    useEffect(()=>{
        fetch("https://animfahad32.github.io/fakeData/clayproducts.json")
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    

    return (
        <div>
            <h2>{data?.name}</h2>
        </div>
    );
};

export default Purchase;