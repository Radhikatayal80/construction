import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 300, 400, 500],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 500, 200, 400, 300],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Online Sale', 'Offline Sale', 'Agent Sale', 'Marketing Sale'],
    datasets: [
      {
        data: [20799, 20799, 20799, 20799],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between py-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/1024px-Amazon_icon.svg.png" // Replace with your logo URL
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">1,234</p>
            <p className="text-gray-500">New Orders</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">5,000</p>
            <p className="text-gray-500">Active Listing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">1,234</p>
            <p className="text-gray-500">Units Sold</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">+</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Lorem dummy text</h2>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Lorem dummy text</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Sale Analytics</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="w-1/2">
              <Pie data={pieData} />
            </div>
            <div className="w-1/2">
              <div className="flex justify-between items-center">
                <div>
                  <p>Online Sale</p>
                  <p>₹ 20,799</p>
                </div>
                <div>
                  <p>Offline Sale</p>
                  <p>₹ 20,799</p>
                </div>
                <div>
                  <p>Agent Sale</p>
                  <p>₹ 20,799</p>
                </div>
                <div>
                  <p>Marketing Sale</p>
                  <p>₹ 20,799</p>
                </div>
              </div>
              <div className="mt-4">
                <select className="border-gray-300 rounded-md">
                  <option>Jan 2022</option>
                  <option>Feb 2022</option>
                  <option>Mar 2022</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
