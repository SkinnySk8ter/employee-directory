import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };



  return (
    <div>
      <div className="mt-4">
        <h2>Employee Directory</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">

            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action " onClick {
                  document.getElementById('p2').innerHTML = "Employee information"
                }>Employee 1</button>
                <button type="button" class="list-group-item list-group-item-action ">Employee 2</button>
                <button type="button" class="list-group-item list-group-item-action ">Employee 3</button>
                <button type="button" class="list-group-item list-group-item-action ">Employee 4</button>

              </div>
            </Col>
          </Row>

        </Container>
        <Container className="mt-4">
          <h3>Hey Boss!</h3>
          <p>After clicking on an Employee their information goes down here!!</p>
        </Container>
      </form>

      <p2></p2>
    </div>
  );
};

export default Signup;
