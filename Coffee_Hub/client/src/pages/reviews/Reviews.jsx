import { Card, Button} from 'react-bootstrap';
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from 'react-router-dom';

export default function Reviews() {

    const [reviews, setReviews] = useState([]);
    const { user } = useContext(Context);

    useEffect(() => {
        const fetchReviews = async () => {
          const res = await axios.get("/comments");
          setReviews(res.data);
        };
        fetchReviews();
    });

    const deleteReview = async (id) => {
      try {
        const res = await axios.delete("/comments/" + id);
        window.location.replace("/reviews");
      } catch (err) {}
  };

    return (
      <>
      <br></br>
      <center><h1 style={{color: "#DAA06D"}}>REVIEWS</h1></center>
      <br></br>
      <Link to="/add-review"><Button variant="dark" className='ms-5 mb-5'>Add New Comment</Button></Link>
      {reviews.map((review) => (
                 <>
                 <br></br>
                 <Card className='me-5 ms-5'>
                   <Card.Header>{new Date(review.createdAt).toDateString()}</Card.Header>
                   <Card.Body>
                     <Card.Title>{review.author}</Card.Title>
                     <Card.Text>
                        {review.content}
                     </Card.Text>
                     { (user.username === review.author) && <Link to= {"/update-product/" + review._id}><Button variant="success" className='me-5'>Update</Button></Link>}
                     { (user.username === review.author) && <Button variant="danger" className='me-5' onClick={() => deleteReview(review._id)}>Delete</Button>}
                   </Card.Body>
                 </Card>
                 <br></br>
                 </>               
                ))}
      
      
      </>
    );
  }
