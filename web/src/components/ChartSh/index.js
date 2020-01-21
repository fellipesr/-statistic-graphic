import React from 'react';
import Chart from "react-google-charts";
import LoadingSpin from 'react-loading-spin';

import './styles.css';

function ChartSh({ sharehdss }) {

  return (
    <div >
      {(sharehdss == false) ? (
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
              data={sharehdss}
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