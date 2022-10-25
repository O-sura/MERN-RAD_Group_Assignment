import {Button, Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import "../style.css"


function Store() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const res = await axios.get("/products");
          setProducts(res.data);
        };
        fetchProducts();
    });

    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Link to="/add-product"><Button variant="dark" className='ms-5 mb-5'>Add New Product</Button></Link>
            <Row xs={2} md={2} className="g-4">
                {products.map((product) => (
                    <Col align="center" key={product._id}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;