import { Button, Card, CardContent, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const StaffUserRegitration = () => {
    const [selectedFirstName, setSelectedFirstName] = useState("");
    const [selectedLastName, setSelectedLastName] = useState("");
    const [selectedEmail, setSelectedEmail] = useState("");
    const [selectedMobile, setSelectedMobile] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");
    const [role, setRole] = useState("");
 
      const handleSubmit = (e) => {
        //password generator
        var randomstring = Math.random().toString(36).slice(-8);
    
        e.preventDefault();
    
        const data = {
          role: role,
          firstName: selectedFirstName,
          lastName: selectedLastName,
          email: selectedEmail,
          mobile: selectedMobile,
          address: selectedAddress,
          password: randomstring,
        };
      
        //validation for all the input fields
    
        if (data.role.length === 0) {
          alert("Role required");
          return null;
        }
    
        if (data.firstName.length === 0) {
          alert("First name is required");
          return null;
        }
    
        if (data.lastName.length === 0) {
          alert("Last name is required");
          return null;
        }
    
        if (data.email.includes("@", 0)) {
        } else {
          alert("email should contain a @ sign");
          return null;
        }
    
        if (data.mobile.length === 10) {
        } else {
          alert("Mobile Number should contain 10 digits");
          return null;
        }
    
        if (data.address.length === 0) {
          alert("Last name is required");
          return null;
        }
    }
    //     //create function
    //     empFormService
    //       .create(data)
    
    //       .then((response) => {
    //         Swal.fire(
    //           "Submited Successfully",
    //           "You have successfully submited a employee",
    //           "success"
    //         );
    //         // window.location.reload();
    //         console.log("inside create" + response.data);
    //         console.log("inside then" + response.data);
    //       })
    //       .catch((e) => {
    //         alert(e);
    //         console.log("this is the error:" + e);
    //       });
    //   };
    

    
      const handleFirstNameChange = (event) => {
        setSelectedFirstName(event.target.value);
      };
      const handleLastNameChange = (event) => {
        setSelectedLastName(event.target.value);
      };
      const handleEmailChange = (event) => {
        setSelectedEmail(event.target.value);
      };
      const handleMobileChange = (event) => {
        setSelectedMobile(event.target.value);
      };
      const handleAddressChange = (event) => {
        setSelectedAddress(event.target.value);
      };
   
    
      const handleRoleChange = (event) => {
        setRole(event.target.value);
        console.log(event.target.value);
      };
    
      return (
        <Container maxWidth="md">
         
            <Container>
              <div>
                <React.Fragment>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Employee Form
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
    
                      <Grid container spacing={3}>
                        <Grid item xs={4}>
                          <p style={styles.label}>Role</p>
                        </Grid>
                        <Grid item xs={5}>
                          <Select
                            variant="outlined"
                            style={styles.formControl}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={role}
                            onChange={handleRoleChange}
                          >
                            <MenuItem value="Doctor">Doctor</MenuItem>
                            <MenuItem value="InventoryManager">
                              InventoryManager
                            </MenuItem>
                            <MenuItem value="Labassistant">Labassistant</MenuItem>
                            <MenuItem value="Pharmasist">Pharmasist</MenuItem>
                            <MenuItem value="PaymentAdmin">PaymentAdmin</MenuItem>
                            <MenuItem value="Receptionist">Receptionist</MenuItem>
                            <MenuItem value="SysAdmin">SysAdmin</MenuItem>
                          </Select>
                        </Grid>
    
                        <Grid item xs={4}>
                          <p style={styles.label}>First Name</p>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            required
                            fullWidth={true}
                            value={selectedFirstName}
                            onChange={handleFirstNameChange}
                            // defaultValue={selectedFirstName}
                          />
                        </Grid>
    
                        <Grid item xs={4}>
                          <p style={styles.label}>Last Name</p>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="lastName"
                            label="Last Name"
                            variant="outlined"
                            required
                            fullWidth={true}
                            value={selectedLastName}
                            onChange={handleLastNameChange}
                            // defaultValue={selectedLastName}
                          />
                        </Grid>
    
                        <Grid item xs={4}>
                          <p style={styles.label}>Email</p>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            required
                            fullWidth={true}
                            value={selectedEmail}
                            onChange={handleEmailChange}
                            // defaultValue={selectedEmail}
                          />
                        </Grid>
    
                        <Grid item xs={4}>
                          <p style={styles.label}>Mobile</p>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            type="number"
                            name="mobile"
                            label="Mobile"
                            variant="outlined"
                            required
                            fullWidth={true}
                            value={selectedMobile}
                            InputProps={{ inputProps: { min: 10, max: 10 } }}
                            onChange={handleMobileChange}
                            // defaultValue={selectedMobile}
                          />
                        </Grid>
    
                        <Grid item xs={4}>
                          <p style={styles.label}>Address</p>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="address"
                            label="Adress"
                            variant="outlined"
                            required
                            fullWidth={true}
                            value={selectedAddress}
                            onChange={handleAddressChange}
                            // defaultValue={selectedAddress}
                          />
                        </Grid>
    
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            onClick={handleSubmit}
                            // startIcon={<SendIcon />}
                          >
                            submit
                          </Button>
                     
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </React.Fragment>
              </div>
            </Container>
      
        </Container>
      );
    }
    
    const styles = {
      button: {
        margin: 20,
        left: 415,
      },
    
      label: {
        margin: 30,
      },
    
      formControl: {
        minWidth: 228,
      },
    
};

export default StaffUserRegitration;