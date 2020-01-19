import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import './styles.css';

function Form({ onSubmit }) {

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [participation, setParticipation] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      first_name,
      last_name,
      participation,
    });

    setFirstName('');
    setLastName('');
    setParticipation('');

  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col>
          <div className="input-block">
            <label htmlFor="first_name">Nome</label>
            <input name="first_name" id="first_name" required value={first_name} onChange={
              e => setFirstName(e.target.value)} />
          </div>
          </Col>
          <Col>
          <div className="input-block">
            <label htmlFor="last_name">Sobrenome</label>
            <input name="last_name" id="last_name" required value={last_name} onChange={
              e => setLastName(e.target.value)} />
          </div>
          </Col>
          <Col>
          <div className="input-block">
            <label htmlFor="participation">Participação</label>
            <input name="participation" id="participation" required value={participation} onChange={
              e => setParticipation(e.target.value)} />
          </div>
          </Col>
          <Col>
          <button type="submit">Enviar</button>
          </Col>
        </Row>
      </Container>
      
    </form>
  );
}

export default Form;