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

  const [sharehds, setShareHolders] = useState([]);
  const [graphic, setGraphic] = useState([]);


  useEffect(() => {
    async function loadShareHolders() {
      const response = await api.get('/sharehd');

      setShareHolders(response.data);

    }

    getGraphic();
    loadShareHolders();
  }, []);

  async function getGraphic() {

    let response = await api.get('/sharehd');
    let shareHoldersNames = response.data;
    let shareHoldersParticipation = response.data;
    let shareHoldersData = [['Name', 'Percentage']];
    for (let i = 0; i < shareHoldersNames.length; i += 1) {
      shareHoldersData.push([shareHoldersNames[i].first_name, shareHoldersParticipation[i].participation])
    }

    //console.log(shareHoldersData);
    setGraphic(shareHoldersData);

  }

  async function addShareHolders(data) {
    const response = await api.post('/sharehd', data)

    setShareHolders([...sharehds, response.data]);
    getGraphic();
  }

  return (
    <div id="app">
      <div >
        <aside>
          <Form onSubmit={addShareHolders} />
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
              <ChartSh graphic={graphic} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
