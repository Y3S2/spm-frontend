import axios from "axios";

//You can change the baseURL that depends on REST APIs url that your Server configures.

export default axios.create({

  baseURL: "",
  headers: {
    "Content-type": "application/json",
  },
});
