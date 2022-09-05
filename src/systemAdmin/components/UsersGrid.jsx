import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "../styles/usersGrid.css"


function UsersGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const [details, setDetails] = useState([]);
  useEffect(() => {
    // getDetails();
  }, []);

  //   const getDetails = () => {
  //     empFormService
  //       .getAll()
  //       .then((response) => {
  //         setDetails(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  let rows = [];
  for (const detail of details) {
    rows.push({
      id: detail._id,
      role: detail.role,
      firstName: detail.firstName,
      lastName: detail.lastName,
      email: detail.email,
      mobile: detail.mobile,
      address: detail.address,
    });
  }



  return (
    <div>
      <input
        type="text"
        placeholder=" Search"
        className="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Role</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Mobile</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((val) => {
                let newVal;
                if (searchTerm === "") {
                  newVal = val;
                } else if (
                  val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  newVal = val;
                }
                return newVal;
              })
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.role}
                  </TableCell>
                  <TableCell align="left">{row.firstName}</TableCell>
                  <TableCell align="left">{row.lastName}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.mobile}</TableCell>
                  <TableCell align="left">
                    <Button data={row.id} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div style={{ float: "right", marginTop: 20, marginBottom: 10 }}>
        <PDF data={rows} headers={headers} title="Employee Report" />
      </div> */}
    </div>
  );
}

export default UsersGrid;
