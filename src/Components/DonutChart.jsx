import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const DonutChart = ({ data }) => {
  return (
    <div className="flex items-center justify-evenly">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100} 
          cy={100} 
          startAngle={90} 
          endAngle={-270} 
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="ml-6">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center mb-2">
            <div
              style={{
                backgroundColor: entry.color,
                height: 20,
                width: 20,
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <h3 className="text-lg font-medium text-gray-700">
              {entry.name} - {entry.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
