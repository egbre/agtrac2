import React from 'react';
import PropTypes from 'prop-types';

const DashboardComponent = ({ data }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      {/* Total Visitors */}
      <div className="dashboard-item">
        <h3>Total Visitors</h3>
        <p>{data.totalVisitors}</p>
      </div>

      {/* Active Users */}
      <div className="dashboard-item">
        <h3>Active Users</h3>
        <p>{data.activeUsers}</p>
      </div>

      {/* Sales Data */}
      <div className="dashboard-item">
        <h3>Sales Data</h3>
        <ul>
          {data.salesData.map((item, index) => (
            <li key={index}>{item.month}: {item.sales}</li>
          ))}
        </ul>
      </div>

      {/* USDA Data */}
      <div className="dashboard-item">
        <h3>USDA Data</h3>
        <ul>
          {data.usdaData.map((item, index) => (
            <li key={index}>{item.year}: {item.estimate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

DashboardComponent.propTypes = {
  data: PropTypes.shape({
    totalVisitors: PropTypes.number.isRequired,
    activeUsers: PropTypes.number.isRequired,
    salesData: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.string.isRequired,
        sales: PropTypes.number.isRequired,
      })
    ).isRequired,
    usdaData: PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.number.isRequired,
        estimate: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired
};

export default DashboardComponent;
