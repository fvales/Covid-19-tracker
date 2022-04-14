import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { ApiConst } from '../constants';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LAST_DAYS = 120;

const OPTIONS = {
    legend: {
        display: false
    },
    // elements: {
    //     point: {
    //         radius: 0
    //     }
    // },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll"
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false
                },
                // ticks: {
                //     beginAtZero: true,
                // },
            },
        ],
    },
};

function LineGraph() {
    const [data, setData] = useState([]);

    const getHistoricalCovidData = async (lastDays) => {
        const chartData = [];
        await fetch(process.env.REACT_APP_URL + ApiConst.HISTORICAL + ApiConst.ALL + '?lastDays=' + lastDays)
            .then(response => response.json())
            .then(data => {
                let lastDatePoint;
                for (let date in data.cases) {
                    if (lastDatePoint) {
                        chartData.push({
                            x: date,
                            y: data.cases[date] - lastDatePoint
                        })
                    }
                    lastDatePoint = data['cases'][date]
                }
                console.log(chartData)
                setData(chartData)
            })
    }

    useEffect(() => {
        getHistoricalCovidData(LAST_DAYS)
    }, [])

    return (
        <div>
            {
                data?.length > 0 && <Line
                    data={{
                        labels: '',
                        datasets: [
                            {
                                label: '',
                                data: data,
                                fill: false,
                                backgroundColor: '#0071bd',
                                borderColor: '#0071bd',
                            },
                        ],
                    }}
                    options={OPTIONS}
                />
            }
        </div>
    )
}

export default LineGraph