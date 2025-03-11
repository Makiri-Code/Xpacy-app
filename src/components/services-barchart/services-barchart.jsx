import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell, Text } from "recharts";

const chart_data = [
  { name: "Plumbing", value: 30, color: "#203645" },
  { name: "Painting", value: 10, color: "#203645" },
  { name: "Security", value: 15, color: "#203645" },
  { name: "Cleaning", value: 30, color: "#203645" },
  { name: "Landscape", value: 0, color: "#203645" },
  { name: "Waste Mgt", value: 15, color: "#203645" },
  { name: "Electric", value: 8, color: "#203645" },
  { name: "Pest Cont..", value: 12, color: "#203645" },

];


const PropertiesBarChart = ({data = chart_data}) => {
  return (
    <div style={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={40} margin={{ top: 10, right: 0, left: 0, bottom: 20 }}>
          <XAxis dataKey="name" tick={{ fontSize: 8, fontFamily: "Unitext Regular" }} angle={0} textAnchor="middle" />
          <YAxis allowDecimals={false} tick={{ fontSize: 12, fontFamily: "Unitext Regular" }} />
          <Tooltip contentStyle={{ fontSize: 12, fontFamily: "Unitext Regular" }} />
          <Bar dataKey="value" radius={[5, 5, 0, 0]}  >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    // maxWidth: "500px",
    fontFamily: "Unitext Regular",
    alignSelf: "start",
  },
};

export default PropertiesBarChart;
