import './Chart.css';

import React from 'react';

import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
    const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar 
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
}

export default Chart;
