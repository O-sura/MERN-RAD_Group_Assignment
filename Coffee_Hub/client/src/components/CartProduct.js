import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>Unit Price : Rs. {productData.price}</p>
            <p>Total of {quantity}</p>
            <p>Rs.{ (quantity * productData.price).toFixed(2) }</p>
            <Button variant='danger' size="sm" onClick={() => cart.deleteFromCart(id)}>Remove Items</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;