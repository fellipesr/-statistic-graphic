import React from 'react';
import Chart from "react-google-charts";
import LoadingSpin from 'react-loading-spin';

import './styles.css';

function ChartSh({ graphic }) {

  return (
    <div >
      {(graphic == false) ? (
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
              data={graphic}
              options={{
                title: 'Dados das Participações',
              }}
            />
          </div>
        )}
    </div>
  );

}

export default ChartSh;