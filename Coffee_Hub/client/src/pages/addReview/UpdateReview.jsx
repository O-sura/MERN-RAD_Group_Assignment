import {Button, Form, InputGroup} from 'react-bootstrap';
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function UpdateReview() {

  const param = window.location.pathname
  const id  = param.split("/")[2]

  const [comment, setComment] = useState();

  useEffect(() => {
      const fetchComment = async () => {
        const res = await axios.get("/comments/" + id);
        setComment(res.data);
      };
      fetchComment();
  });


  const [content, setContent] = useState("");
   const { user } = useContext(Context);

   const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedComment = {
      author:user.username,
      content
    };
    
    try {
      const res = await axios.put("/comments/" + id, updatedComment);
      console.log(res.data)
      window.location.replace("/reviews");
    } catch (err) {
      console.log(err)
    }
  };

    return (
    <>
    <h2 className='mt-5 ms-4'>Add Comment</h2>
    <Form className="ms-4 me-4 mt-5" onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroup.Text>Type Here</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" defaultValue={comment?.content} onChange={(e) => setContent(e.target.value)}/>
      </InputGroup>
      <Button variant="primary" type="submit" className='mt-3'>
        Submit
      </Button>
    </Form>
    </>
    )}