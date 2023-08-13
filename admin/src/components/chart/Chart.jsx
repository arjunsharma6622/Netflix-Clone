// import "./chart.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function Chart({ title, data, dataKey, grid }) {

//   return (
//     <div className="chart">
//       <h3 className="chartTitle">{title}</h3>
//       <ResponsiveContainer width="100%" aspect={4 / 1}>
//         <LineChart data={data}>
//           <XAxis dataKey="name" stroke="#5550bd" />
//           <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
//           <Tooltip />
//           {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }



import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  const allMonths = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"
  ];

  // Create an array of objects with month names and corresponding data
  const formattedData = allMonths.map(month => ({
    name: month,
    [dataKey]: data.find(item => item.name === month)?.[dataKey] || 0
  }));

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={formattedData}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
