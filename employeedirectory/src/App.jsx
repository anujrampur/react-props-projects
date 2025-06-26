import React from "react";
import Employee from './Employee';
function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Employee Directory</h1>
        <Employee name="Anuj" department="IT" designation="Developer" />
        <Employee name="Payal" department="HR" designation="Manager" />
        <Employee
          name="Pranjal"
          department="Finance"
          designation="Chief Executive Officer"
        />
      </div>
    </>
  );
}

export default App;
