
const PropertiesSingleLineChart = () => {
 
  return (
    <div style={styles.container}>
      <div style={styles.line}>
        <div style={{ ...styles.segment, backgroundColor: "#203645", width: "40%" }} /> {/* Rent (40%) */}
        <div style={{ ...styles.segment, backgroundColor: "#ABC6D8", width: "60%" }} /> {/* Sale (60%) */}
      </div>
      
      {/* Labels Below Line */}
      <div style={styles.labels}>
        <span style={spanStyles}>Sold</span>
        <span style={spanStyles}>Available for sale</span>
      </div>
    </div>
  );
};

// Styles for responsiveness
const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  line: {
    display: "flex",
    width: "100%",
    height: "8px", // Thickness of the line
    borderRadius: "4px",
    overflow: "hidden", // Ensures seamless color transition
  },
  segment: {
    height: "100%",
  },
  labels: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "bold",
  },
};
 const spanStyles = {
    color: "#585858",
    fontFamily: "Unitext Regular",
  }
export default PropertiesSingleLineChart;
