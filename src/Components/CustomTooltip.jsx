import React from 'react';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, fill } = payload[0];
    return (
      <div
        className="p-2 rounded-lg shadow-lg"
        style={{
          backgroundColor: fill,
          color: 'red',
          minWidth: '100px',
          textAlign: 'center',
        }}
      >
        <p className="font-bold">{name}</p>
        <p>{value}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
