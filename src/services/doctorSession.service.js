import http from "../http-common";

// const getAll = () => {
//     return http.get("/sessions");
// };

const get = id => {
    return http.get("/sessions/"+ id);
};

const create = data => {
    return http.post("/sessions", data);
};


const sessionServices = {
    // getAll,
    get,
    create,
    increaseAppointmentCount,
    remove,
    // removeAll,
};
export default sessionServices;