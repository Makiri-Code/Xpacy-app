import React from "react";
import { PieChart, Legend, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Pest control", value: 2, color: "#ABC6D8" },
  { name: "Plumbering", value: 3, color: "#73A0BE" },
  { name: "Painting", value: 4, color: "#477899" },
  { name: "Plumbing", value: 6, color: "#2D4C61" },
];

const totalProperties = data.reduce((sum, entry) => sum + entry.value, 0);

const CustomizedLabel = ({ viewBox }) => {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="central"
      style={{ display: 'flex', flexWrap: 'wrap', fontSize: "0.75rem", fontWeight: "400", fill: "#585858", fontFamily: 'Unitext Regular' }}
    >
      {`${totalProperties} properties`}
    </text>
  );
};

const PropertiesMultiplePieChart = ({chart_data = data}) => {
    return (
    <div style={styles.container}>
      {/* Responsive Pie Chart */}
      <div style={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chart_data}
              cx="37%"
              cy="37%"
              innerRadius="45%" // Responsive donut effect
              outerRadius="80%"
              dataKey="value"
              cornerRadius={2}
            >
              {chart_data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Labels Below Chart */}
      <div style={styles.labels}>
        {chart_data.map((item, index) => (
          <div key={index} style={styles.labelItem}>
            <div style={{ ...styles.colorBox, backgroundColor: item.color }} />
            <span style={{fontFamily: "Unitext Regular"}}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles for responsiveness
const styles = {
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "200px",
    margin: "auto 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  chartWrapper: {
    width: "100%",
    minWidth: "200px",
    maxWidth: "250px",
    height: "200px",
  },
  labels: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    flexDirection: "column",
    bottom: "-7px",
    right: '-44px',
    flexWrap: "wrap",
    fontFamily: "Unitext Regular",
  },
  labelItem: {
    display: "flex",
    alignItems: "center",
    gap: '4px',
  },
  colorBox: {
    width: "14px",
    height: "14px",
    marginRight: "5px",
  },
};


export default PropertiesMultiplePieChart;
