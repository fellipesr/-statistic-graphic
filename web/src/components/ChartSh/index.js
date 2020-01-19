import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts";
import api from '../../services/api';
import LoadingSpin from 'react-loading-spin';

import './styles.css';

function ChartSh() {

  const [sharehds, setSharehd] = useState([]);

  useEffect(() => {
    async function getSharehd() {

      let response = await api.get('/sharehd');
      let shareHoldersNames = response.data;
      let shareHoldersParticipation = response.data;
      let shareHoldersData = [['Name', 'Percentage']];
      for (let i = 0; i < shareHoldersNames.length; i += 1) {
        shareHoldersData.push([shareHoldersNames[i].first_name, shareHoldersParticipation[i].participation])
      }

      console.log(shareHoldersData);

      setSharehd(shareHoldersData);

    }

    getSharehd();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div >
      {(sharehds == false) ? (
        <div id="loadingSpin">
          <LoadingSpin
            primaryColor='blue'
          />
        </div>
      ) : (
          <div id="chart">
            <Chart
              width={'100%'}
              height={'300px'}
              chartType="PieChart"
              data={sharehds}
              options={{
                title: 'Dados das Participações',
              }}
            />
            <div>
              <button type="reset" onClick={refreshPage}>Atualizar</button>
            </div>
          </div>

        )}


    </div>
  );

}

export default ChartSh;