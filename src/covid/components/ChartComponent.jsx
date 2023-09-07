import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';
import { dataToArr, formatDate, formatLabelData } from '../helpers';

export const ChartComponent = ({ date,...data}) => {
    const labels = Object.keys(data).map(key => formatLabelData(key))
    const dataArr = dataToArr(data)
    const chartRef = useRef(null);
    let chart = null;

    useEffect(() => {
        if (chart) chart.destroy();

        const ctx = chartRef.current.getContext('2d');
        chart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels,
                datasets: [{
                    label: `${formatDate(date)} - COVID DATA`,
                    data: dataArr,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(75, 192, 192)',
                        'rgb(255, 205, 86)',
                    ]
                }],
            },
        });

        // Importante: Devuelve una función de limpieza para destruir el gráfico al desmontar el componente
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}
