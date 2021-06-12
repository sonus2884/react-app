import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints
        .map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues);

    //console.log({ dataPoints:  totalMaxValue})

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaxValue}
                    label={dataPoint.label}
                />
            )}
        </div>
    );

};

export default Chart;