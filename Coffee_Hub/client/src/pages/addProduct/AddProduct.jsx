import {Form, Button }  from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext, useState } from "react";
import axios from "axios";

function AddProduct() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      image,
      price
    };
    
    try {
      const res = await axios.post("/products", newProduct);
      window.location.replace("/store");
    } catch (err) {}
  };

  return (
    <>
    <center><h1 className='mt-4'>Add New Product</h1></center>
    <Form className='ms-5 me-5 mt-5' onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Product Name</InputGroup.Text>
        <Form.Control
          aria-label="Product Name"
          aria-describedby="basic-addon1"
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Product Image(URL)</InputGroup.Text>
        <Form.Control
          aria-label="Product Image"
          aria-describedby="basic-addon1"
          onChange={(e) => setImage(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Rs.</InputGroup.Text>
        <Form.Control aria-label="Price" onChange={(e) => setPrice(e.target.value)}/>
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <Button variant="success" type="submit" className='mt-3'>Add to Store</Button>
      </InputGroup>
    </Form>
    </>
  );
}

export default AddProduct;