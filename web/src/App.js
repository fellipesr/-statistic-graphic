import React, { useEffect, useState } from 'react';
import api from '../src/services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table } from 'react-bootstrap';

import './global.css';
import './App.css';
import './Main.css';

import Form from './components/Form'
import ShareHolders from './components/ShareHolders'
import ChartSh from "../src/components/ChartSh";

function App() {

  const [sharehds, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/sharehd');

      setDevs(response.data);

    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/sharehd', data)

    setDevs([...sharehds, response.data]);
  }

  return (
    <div id="app">
      <div >
        <aside>
          <Form onSubmit={handleAddDev} />
        </aside>
      </div>
      <Container>
        <Row>
          <Col>
            <main>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Participação</th>
                  </tr>
                </thead>
                <tbody>
                  {sharehds.map(sharehd => (
                    <ShareHolders key={sharehd._id} sharehd={sharehd} />
                  ))}
                </tbody>
              </Table>
              <ul>
              </ul>
            </main>
          </Col>
          <Col>
            <div id="chart">
              <ChartSh />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
