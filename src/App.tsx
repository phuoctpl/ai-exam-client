import React, { useState } from 'react';
import axios from "axios";
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [result, setResult] = useState("");
    const [comment, setComment] = useState("");
  
    const fetchData = async () => {
        const response = await axios({
            "method": "GET",
            "url": "http://localhost:5000/",
            "params": {
                "comment": comment
            }
        })
        setResult(response.data)
    }
    
    return (
        <div style={{margin:"2em 10%"}}>
            <Form>
                <Form.Group controlId="form.sentenceChecking">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} value={comment} onChange={event => {setComment(event.target.value)}} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={fetchData}>
                    Check
                </Button>
            </Form>
            {result ? <Card style={{marginTop:"1em"}}>
                <Card.Header>Result</Card.Header>
                <Card.Body>
                    Comment "{comment}" is:
                    <br/>
                    {result}
                </Card.Body>
            </Card> : null}
        </div>
    );
}

export default App;
