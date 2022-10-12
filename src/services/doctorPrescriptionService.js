import http from "../http-common";

const getAll = () => {
    return http.get("/prescriptions");
};

const get = id => {
    return http.get("/prescriptions/" + id);
};

const create = data => {
    return http.post("/prescriptions", data);
};

const update = (id, data) => {
    return http.put(`/prescriptions/${id}`, data);
};



export default PrescriptionDataServices;
