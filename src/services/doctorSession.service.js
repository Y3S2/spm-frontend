import http from "../http-common";

// const getAll = () => {
//     return http.get("/sessions");
// };

const get = id => {
    return http.get("/sessions/"+ id);
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