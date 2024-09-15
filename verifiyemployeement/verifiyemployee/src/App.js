import './App.css';
import React, { useState} from 'react';
import { Container, Row, Col, Form, Button, Modal, ListGroup } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [fromPage, setFormPage] = useState({
    Employee_ID: '',
    Company_Name: '',
    Verification_Code: '',

  });
  const [fromError, setFormError] = useState({
    Employee_ID: '',
    Company_Name: '',
    Verification_Code: '',

  });
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const changeHandler = (event) => {
    fromPage[event.target.name] = event.target.value;
    setFormPage({ ...fromPage });
  }
  const validateData = () => {
    const newErrors = {};
    if (!fromPage.Employee_ID) newErrors.Employee_ID = 'Please Enter Employee ID';
    if (!fromPage.Company_Name) newErrors.Company_Name = 'Company name is not blank';
    if (!fromPage.Verification_Code) newErrors.Verification_Code = 'Enter Verification code';
    return newErrors;
  };

  const signupHandler = (event) => {
    const validationErrors = validateData();
    if (Object.keys(validationErrors).length > 0) {
      setFormError(validationErrors);
      return;
    }
    setFormError({});
    submitButton();
    handleShow();
  }
  // AJAX CALL
  const submitButton = async (event) => {

    try {
      const res = await axios.post('Verifiy_Employeement/VerifiyEmployee', {
        Employee_ID: fromPage.Employee_ID,
        Company_Name: fromPage.Company_Name,
        Verification_Code: fromPage.Verification_Code,
      });
      setData(res.data);

    }
    catch (err) {
      if (err.response) {
        // Handle error response
        if (err.response.status === 404) {
          setData(err.response);
        } else {
          setData(err.response);
        }
      }
    }
  }
  return (
    <div className="App" >
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col md={6} lg={4}>
            <div className="p-4 border rounded bg-light">
              <h4 className="text-center mb-4">Employeement Verifiy</h4>

              <Form >
                <Form.Group className="mb-2">
                  <Form.Label style={{ display: "flex", fontWeight: "bold" }}>Employee ID</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    // placeholder="Employee ID"
                    id="firstname"
                    name="Employee_ID"
                    value={fromPage.Employee_ID}
                    isInvalid={!!fromError.Employee_ID}
                    onChange={(event) => { changeHandler(event) }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ display: "flex" }}>
                    {fromError.Employee_ID}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label style={{ display: "flex", fontWeight: "bold" }}>Company Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    // placeholder="Company Name"
                    id="Company_Name"
                    name="Company_Name"
                    value={fromPage.Company_Name}
                    isInvalid={!!fromError.Company_Name}
                    onChange={(event) => { changeHandler(event) }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ display: "flex" }}>

                    {fromError.Company_Name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label style={{ display: "flex", fontWeight: "bold" }}>Verification Code</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    // placeholder="Verification Code"
                    id="Verification_Code"
                    name="Verification_Code"
                    value={fromPage.Verification_Code}
                    isInvalid={!!fromError.Verification_Code}
                    onChange={(event) => { changeHandler(event) }}
                  />
                  <Form.Control.Feedback type="invalid" style={{ display: "flex" }}>
                    {fromError.Verification_Code}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  className="w-100"
                  style={{ marginTop: "2%", fontWeight: "bold" }}
                  onClick={signupHandler}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Fetched Data</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            
            {
            Object.entries(data).map(([key, value]) => (
              <ListGroup.Item key={key}>
                <strong>{value}</strong>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  );
}
export default App;
