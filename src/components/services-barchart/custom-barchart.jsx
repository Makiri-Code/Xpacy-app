import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { week: "Week 1", Rent: 80, "Property Purchases": 1100, "Facility Mgt Services": 10 },
  { week: "Week 2", Rent: 100, "Property Purchases": 850, "Facility Mgt Services": 12 },
  { week: "Week 3", Rent: 70, "Property Purchases": 900, "Facility Mgt Services": 13 },
  { week: "Week 4", Rent: 50, "Property Purchases": 1200, "Facility Mgt Services": 15 },
];

const CustomBarChart = ({customData= data}) => {
  return (
    <div style={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={customData} barGap={5}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Rent" fill="#73A0BE" radius={[5, 5, 0, 0]}/>
            <Bar dataKey="Property Purchases" fill="#203645" radius={[5, 5, 0, 0]}/>
            <Bar dataKey="Facility Mgt Services" fill="#C2A269" radius={[5, 5, 0, 0]}/>
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
export default CustomBarChart;
