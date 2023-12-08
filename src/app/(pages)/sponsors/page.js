"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";


const data = {
    labels: ['Title', 'Gold', 'Silver'],
    datasets: [
        {
            data: [33, 33, 33],
            backgroundColor: ['#FF6384', '#FFD700', '#C0C0C0'],
            hoverBackgroundColor: ['#FF6384', '#FFD700', '#C0C0C0'],
            borderWidth: 10,
            hoverBorderWidth: 0,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false, // Hide the legend
        },
    }
};

const Sponsors = () => {

    return (
        <div className='bg-black min-h-screen flex justify-center items-center' >
            <div className='relative pt-20 w-[35rem]' >
                <Doughnut data={data} options={options} />
                <div className='absolute text-xl top-[55%] left-[46%] text-white'>Tiers</div>
            </div>
        </div>
    )
}

export default Sponsors