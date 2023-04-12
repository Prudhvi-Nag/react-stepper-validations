import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const MyForm = () => {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log('Form data:', formState);
    }
    setValidated(true);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    let error = '';
    if (name === 'name') {
      const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
      error = value.length === 0 ? 'Name is required' : regex.test(value) ? '' : 'Name is invalid';
    } else if (name === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error = value.length === 0 ? 'Email is required' : regex.test(value) ? '' : 'Email is invalid';
    } else if (name === 'password') {
      const regex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
      error = value.length === 0 ? 'Password is required' : regex.test(value) ? '' : 'Password is invalid';
    }
    const element = document.getElementsByName(name)[0];
    if (error) {
      element.setCustomValidity(error);
    } else {
      element.setCustomValidity('');
    }
  };

  return (
   <Container>
    <div className='mt-5'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <Form.Control.Feedback type="invalid">Please enter a valid name.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <Form.Control.Feedback type="invalid">
          Password must be at least 8 characters 
        </Form.Control.Feedback>
      </Form.Group>

     <div className='mt-3 d-flex justify-content-end'>
     <Button variant='primary' type='submit'>Submit</Button>
     </div>
      </Form>
    </div>
   </Container>
  )}
  export default MyForm



// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';

// const MyForm = () => {
//   const [validated, setValidated] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//     //   event.stopPropagation();
//     }
//     setValidated(true);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBlur = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//     //   event.stopPropagation();
//     }
//     setValidated(true);
//   };

//   return (
//     <Container>
//     <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-5" >
//       <Form.Group controlId="formName">
//         <Form.Label className='mt-2'>Name</Form.Label>
//         <Form.Control
//           required
//           type="text"
//           placeholder="Enter your name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         <Form.Control.Feedback type="invalid">
//           Please enter your name.
//         </Form.Control.Feedback>
//       </Form.Group>

//       <Form.Group controlId="formEmail">
//         <Form.Label className='mt-2'>Email address</Form.Label>
//         <Form.Control
//           required
//           type="email"
//           placeholder="Enter your email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         <Form.Control.Feedback type="invalid">
//           Please enter a valid email address.
//         </Form.Control.Feedback>
//       </Form.Group>

//       <Form.Group controlId="formPassword">
//         <Form.Label className='mt-2'>Password</Form.Label>
//         <Form.Control
//           required
//           type="password"
//           placeholder="Enter your password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         <Form.Control.Feedback type="invalid">
//           Please enter a password.
//         </Form.Control.Feedback>
//       </Form.Group>

//       <div className='d-flex justify-content-end'>
//       <Button className='mt-2' variant="primary" type="submit">
//         Submit
//       </Button>
//       </div>
//     </Form>
//     </Container>
//   );
// };

// export default MyForm;