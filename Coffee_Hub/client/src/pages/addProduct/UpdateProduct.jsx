import {Form, Button }  from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from "react";
import axios from "axios";

function UpdateProduct() {

  const param = window.location.pathname
  const id  = param.split("/")[2]

  const [product, setProduct] = useState();

  useEffect(() => {
      const fetchProduct = async () => {
        const res = await axios.get("/products/" + id);
        setProduct(res.data);
      };
      fetchProduct();
  });


  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateProduct = {
      name,
      image,
      price
    };
    
    try {
      const res = await axios.put("/products/" + id, updateProduct);
      window.location.replace("/store");
    } catch (err) {}
  };

  return (
    <>
    <center><h1 className='mt-4'>Update Product</h1></center>
    <Form className='ms-5 me-5 mt-5' onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Product Name</InputGroup.Text>
        <Form.Control
          aria-label="Product Name"
          aria-describedby="basic-addon1"
          defaultValue={product?.name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Product Image(URL)</InputGroup.Text>
        <Form.Control
          aria-label="Product Image"
          aria-describedby="basic-addon1"
          defaultValue={product?.image}
          onChange={(e) => setImage(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Rs.</InputGroup.Text>
        <Form.Control aria-label="Price" defaultValue={product?.price} onChange={(e) => setPrice(e.target.value)}/>
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <Button variant="success" type="submit" className='mt-3'>Update Product</Button>
      </InputGroup>
    </Form>
    </>
  );
}

export default UpdateProduct;