import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
    import Button from 'react-bootstrap/Button';
export const Forms=()=> {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      // Tutaj możesz dodać kod do obsługi wysłania formularza, np. wysłać żądanie do serwera
    
      // Czyść pola formularza
      setEmail('');
      setMessage('');
    };
    
    return (
      <>
        <div className="subTitle">Social Media</div>
        <Card bg="light" style={{ width: '80vw', marginBottom: '5vw' }}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} value={message} onChange={handleMessageChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
    
}
