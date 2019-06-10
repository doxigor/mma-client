import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { BarChart, Bar as RechartBar } from 'recharts'

interface IChart {
    a: string | number;
    b: string | number;
    height?: number;
    width?: number;
}

interface IRadialChart extends IChart {
    label?: string;
}

const CircleChart: React.FC<IRadialChart> = (props: IRadialChart) => {
    const { label, a, b, width, height } = props;
    const defaultStyle = {
        width: "70px",
        height: "70px"
    };
    const defaultData = {
        datasets: [{
            backgroundColor: [
                'rgba(0, 229, 255, 1)',
                'rgba(255, 0, 0, 1'
            ],
            data: [a, b],
        }]
    }


    const pieChartOptions = {
        maintainAspectRatio: true,
        legend: {
            display: false,
        }
    }

    return (
        <div style={defaultStyle}>
            <h3>{label}</h3> 
            <Pie data={defaultData} options={pieChartOptions} width={60} height={60} redraw />
        </div>

    );
}

const DoughnutChart: React.FC<IRadialChart> = (props: IRadialChart) => {
    const { label, a, b, width, height } = props;
    const defaultStyle = {
        width: "70px",
        height: "70px"
    };
    const defaultData = {
        datasets: [{
            backgroundColor: [
                'rgba(0, 229, 255, 1)',
                'rgba(255, 0, 0, 1'
            ],
            data: [a, b],
        }]
    }

    const pieChartOptions = {
        maintainAspectRatio: true,
        legend: {
            position: 'bottom',
        }
    }

    return (
        <div style={defaultStyle}>
            <h3>{label}</h3> 
            <Doughnut data={defaultData} width={60} height={60} redraw />
        </div>

    );
}

const SingleBarChart: React.FC<IChart> = (props: IChart) => {
    const { a, b, height, width } = props;
    const data = [
        {uv:a, amt:0},
        {pv:b, amt:1}
    ]

    return (
        <div>
            <BarChart width={100 || width} height={height || 60} data={data}>
                <RechartBar dataKey="pv" fill="#41d3f4" />
                <RechartBar dataKey="uv" fill="#f44242" />
            </BarChart>
        </div>

    );
}

export { SingleBarChart, CircleChart, DoughnutChart };