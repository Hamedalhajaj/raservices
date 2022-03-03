import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";
import * as yup from "yup";
import emailjs from "emailjs-com";


const schema = yup.object().shape({
  firstName: yup.string().required().label("firstName"),
  lastName: yup.string().required().label("lastName"),
  email: yup.string().required().email(),
  phone: yup.number().required(),
  zip: yup.number().required(),
  comment: yup.string()
});

const QuoteForm = props => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = () => {
    props.setShowModal(false);
  };
  const handleFormSubmit = values => {
    //send request here and handle it,
    emailjs.send("service_bjnsj9g", "template_gtjh7cu", values, "user_tm2Wf7r3IPorQXM3O4ykW")
    .then(
      result => {
        console.log("success", result.text);
        setSubmitted(true);
      },
      error => {
        console.log("error", error.text);
        setSubmitted(true);
        setError(true);
      }
    )
    .catch((err) => {console.log(err)});
  };

  const handleTryAgain = () => {
    setSubmitted(false);
    setError(false);
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    zip: "",
    comment: ""
  };

  if (submitted) {
    return (
      <Modal show={true} centered size='lg' onHide={handleClose}>
        {error ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Something went wrong.</Modal.Title>
            </Modal.Header>
            <Alert variant='danger' style={{ margin: "5%" }}>
              Something went wrong, please try again.
            </Alert>
            <Modal.Footer>
              <Button variant='primary' onClick={handleTryAgain}>
                Try again
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Alert variant='success' style={{ margin: "5%" }}>
              You&apos;ve successfully submitted a request for a quote, Stay tuned for a call from us!
            </Alert>
          </>
        )}
      </Modal>
    );
  }

  return (
    <Modal show={true} centered size='lg' onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Let&apos;s Get You A Qoute!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          className='quoteForm'
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit} noValidate className='quoteForm'>
              <Form.Group className='mb-3' controlId='validationFormik101'>
                <Form.Control
                  type='text'
                  name='firstName'
                  placeholder='First Name*'
                  onChange={handleChange}
                  value={values.firstName}
                  isInvalid={!!errors.firstName}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='lastName'
                  placeholder='Last Name*'
                  name='lastName'
                  onChange={handleChange}
                  value={values.lastName}
                  isInvalid={!!errors.lastName}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='email'
                  placeholder='Email*'
                  name='email'
                  onChange={handleChange}
                  value={values.email}
                  isInvalid={!!errors.email}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='number'
                  placeholder='Phone*'
                  name='phone'
                  onChange={handleChange}
                  value={values.phone}
                  isInvalid={!!errors.phone}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='number'
                  placeholder='Zip*'
                  name='zip'
                  onChange={handleChange}
                  value={values.zip}
                  isInvalid={!!errors.zip}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  as='textarea'
                  placeholder='Leave a comment here'
                  name='comment'
                  onChange={handleChange}
                  value={values.comment}
                  isInvalid={!!errors.comment}
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant='danger' onClick={handleClose}>
                  Close
                </Button>
                <Button type='submit' variant='primary'>
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default QuoteForm;
