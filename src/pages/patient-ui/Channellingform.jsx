import { Container } from "@material-ui/core";
import React from "react";
import Controls from "../../components/patient-ui/Echannelling/Controls";
import { Form } from "../../components/patient-ui/Echannelling/useForm";
import { useState } from "react";
import { useParams } from "react-router-dom";
import channellServices from "../../services/echannelling.Service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import sessionServices from "../../services/doctorSession.service";
import { Button } from "@material-ui/core";

export default function EForm() {
  let { sessionID } = useParams();
  const history = useHistory();

  //demo button for the form
  const DemoChanell = () => {
    setFullName("Wishwa Gayanath Rathnaweera");
    setEmailAddress("anjanadinethra@hotmail.com");
    setNICNumber("981662067V");
    setMobileNumber("0767990025");
    setAge("23");
  };

  const handleSubmit = (e) => {
    console.log("submitted");

    e.preventDefault();

    const data = {
      session: sessionID,
      fullname: fullname,
      nic: nic,
      email: email,
      mobile: mobile,
      age: age,
    };

    //validation of the form feilds

    if (data.email.includes("@" && ".com", 0)) {
    } else {
      toast.error("Invalid Email type please renter your Email address", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
      // alert("email should contain a @");
      return null;
    }

    var tempNic = data.nic;
    if (tempNic.length === 10) {
    } else {
      toast.error(
        "Invalid ID number {it must contain 9 digits and a V character at the end",
        {
          className: "error-toast",
          draggable: true,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        }
      );

      return null;
    }

    if (
      data.mobile.includes(
        "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9",
        0
      )
    ) {
    } else {
      toast.error("Please ONLY enter numbers to the mobile number feild", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });

      return null;
    }

    var tempMobile = data.mobile;
    if (tempMobile.length === 10) {
      // alert("number sucessfull");
    } else {
      toast.error("Mobile number must contain 10 digits", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
      // alert("number must contain 10 digits");
      return null;
    }

    var tempAge = data.age;
    if (tempAge.length === 2) {
    } else {
      toast.error("Invalid Age", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });

      return null;
    }

    //Create chanelling
    channellServices
      .create(data)
      .then(() => {
        sessionServices
          .increaseAppointmentCount(sessionID)
          .then(() => {
            history.push("/payments");
          })
          .catch((error) => {
            alert("couldn't update session : " + error);
          });
      })
      .catch((e) => {
        alert("this is the error:" + e);
      });
  };

  const [fullname, setFullName] = useState("");
  const [nic, setNICNumber] = useState("");
  const [email, setEmailAddress] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [age, setAge] = useState("");

  const handlenameChange = (event) => {
    setFullName(event.target.value);
  };
  const handlenicChange = (event) => {
    setNICNumber(event.target.value);
  };

  const handleemailChange = (event) => {
    setEmailAddress(event.target.value);
  };
  const handlmboileChange = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleageChange = (event) => {
    setAge(event.target.value);
  };

  const [isDisabled, setIsDisabled] = useState(true);

  function changeCheck() {
    setIsDisabled(!isDisabled);
  }

  return (
    <Container maxWidth="md">
      <h3>E Channelling</h3>
      <h4>For channelling entry your details below</h4>
      <br />
      <Form onSubmit={handleSubmit}>
        <container>
          <Controls.Input
            name="fullname"
            label="Full Name"
            value={fullname}
            onChange={handlenameChange}
            required
          />

          <Controls.Input
            label="National Identity Card Number (NIC)"
            name="nic"
            value={nic}
            onChange={handlenicChange}
            required
          />

          <Controls.Input
            label="Email"
            name="email"
            value={email}
            onChange={handleemailChange}
            required
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={mobile}
            onChange={handlmboileChange}
            required
          />
          <Controls.Input
            label="Age"
            name="age"
            value={age}
            onChange={handleageChange}
            required
          />

          <Controls.Checkbox
            name="isConfirm"
            label="Confirming that all the above entered details are correct!"
            onChange={changeCheck}
          />

          <div className="buttonAlignRight">
            <Controls.Button
              disabled={isDisabled}
              type="submit"
              text="Channel"
            />
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              onClick={DemoChanell}
            >
              DEMO
            </Button>
            <ToastContainer />
          </div>
        </container>
      </Form>
    </Container>
  );
}