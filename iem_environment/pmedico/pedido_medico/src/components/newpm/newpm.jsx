import { Container, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

export default function NewPM(){
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = ( e ) => {
    const form = e.currentTarget;
    if( form.checkValidity() === false ){
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true)
  };

  return(
    <Form noValidate validated={ validated }>
    </Form>
  );
}
