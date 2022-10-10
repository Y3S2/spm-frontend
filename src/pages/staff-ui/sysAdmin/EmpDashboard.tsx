import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import empFormService from "../../../services/empForm.service";
import { useEffect, useState } from "react";




function EmpDashboard() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getDetails();
  },[]);



  const getDetails = () => {
    empFormService
      .getAll()
      .then((response) => {
        setDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let rows = [];
  for (const detail of details) {
    rows.push({
      id:detail._id,
      role: detail.role,
      firstName: detail.firstName,
      lastName: detail.lastName,
      email: detail.email,
      mobile: detail.mobile,
      address: detail.address,
    });
  }
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        
      />
    </div>
  );
}

export default EmpDashboard;
