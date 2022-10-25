import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    //console.log(cart.items);

    const deleteProduct = async () => {
        console.log(product._id)
        try {
          const res = await axios.delete("/products/" + product._id);
          window.location.replace("/store");
        } catch (err) {}
    };

    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        Rs.{product.price}
        </Card.Text>
        { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart : {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
      <br/>
      <Link to= {"/update/" + product._id}><Button variant="dark" className='mb-5 mt-4'>Update</Button></Link>
      <Button variant="dark" className='ms-5 mb-5 mt-4' onClick={deleteProduct}>Delete</Button>
      </Card.Body>
    </Card>
    )
}

export default ProductCard;

{/* <Card>
            <Card.Body className='cards'>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Rs.{product.price}</Card.Text>
                <Card.Img src={product.imageUrl} className='image1'></Card.Img><br></br>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart : {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card> */}



// import { Card, Button, Form, Row, Col } from 'react-bootstrap';
// import { CartContext } from '../CartContext';
// import { useContext } from 'react';

// function ProductCard(props) { // props.product is the product we are selling
//     const product = props.product;
//     const cart = useContext(CartContext);
//     const productQuantity = cart.getProductQuantity(product.id);
//     console.log(cart.items);
//     return (
//         <Card>
//             <Card.Body className='cards'>
//                 <Card.Title>{product.title}</Card.Title>
//                 <Card.Text>Rs.{product.price}</Card.Text>
//                 <Card.Img src={product.imageUrl} className='image1'></Card.Img><br></br>
//                 { productQuantity > 0 ?
//                     <>
//                         <Form as={Row}>
//                             <Form.Label column="true" sm="6">In Cart : {productQuantity}</Form.Label>
//                             <Col sm="6">
//                                 <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
//                                 <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
//                             </Col>
//                         </Form>
//                         <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>
//                     </>
//                     :
//                     <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
//                 }
//             </Card.Body>
//         </Card>
//     )
// }

// export default ProductCard;