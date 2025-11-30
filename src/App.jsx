import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import './App.css';

import employeeData from "./employee.json";

function App() {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [darkMode, setDarkMode] = useState(storedTheme === "dark");
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const [rowData, setRowData] = useState([...employeeData]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "id", headerName: "ID", filter: true, floatingFilter: true },
    {
      // field: "firstName",
      headerName: "Full Name",
      valueGetter: (item) => `${item.data.firstName} 
      ${item.data.lastName}`,
      filter: true,
      floatingFilter: true,
    },
    { field: "email", headerName: "e-mail ID", filter: true, floatingFilter: true },
    { field: "department", headerName: "Department", filter: true, floatingFilter: true },
    { field: "position", headerName: "Position", filter: true, floatingFilter: true },
    { field: "salary", headerName: "Salary", filter: true, floatingFilter: true, editable: true },
    { field: "hireDate", headerName: "Hire Date(yyyy/mm/dd)", filter: true, floatingFilter: true },
    { field: "age", headerName: "Age", tooltipField:"id", filter: true, floatingFilter: true },
    { field: "location", headerName: "Location", filter: true , floatingFilter: true},
    { field: "performanceRating", headerName: "Performance Rating", filter: true, floatingFilter: true },
    { field: "projectsCompleted", headerName: "Projects", filter: true, floatingFilter: true },
    { field: "isActive", headerName: "Active Status", filter: true },
    { field: "skills", headerName: "Skills", filter: true, floatingFilter: true, tooltipField:"id" },
    { field: "manager", headerName: "Manager", filter: true, floatingFilter: true },
  ]);
  const defaultColDef = {resizable: true}
  return (
      <div style={{ padding: 20}}>
        <h1 className="dashboard-heading">Ag Grid Factwise Employee Dashboard</h1>
        <div className="toggle-row">
          <span className="toggle-text">{darkMode ? "Dark Mode" : "Light Mode"}</span>

        <label className="theme-toggle">
          <input 
            type="checkbox"
            checked={darkMode}
            onChange={() =>
              setDarkMode(!darkMode)
            }/>
            <span className="slider"></span>
        </label>
        </div>
        <div className={`ag-theme-alpine ${darkMode ? "custom-dark" : ""}`} style={{ height: 590, width: 1300}}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs} 
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10,20]}
          enableBrowserTooltips={true}
          />
        </div>
      </div>
  );
}

export default App;
