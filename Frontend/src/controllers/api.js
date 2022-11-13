import axios, { Axios } from "axios";


const url = "http://10.0.0.115:3000/api";

const errorCatcher = async (err) => {
  /// Error
  if (err.response) {
    console.log(err.response.data.msg);
    return err.response;
    /// Error de mala conexion
  } else if (err.request) {
    // console.log(err.request)
    return {
      data: {
        msg: "No se ha contactado con el servidor, revise su conexion a internet y vuelva a intentarlo",
      },
    };
    /// Error inesperado
  } else {
    console.log("Error", err.message);
    return {
      data: { msg: "Ha ocurrido un error inesperado, intente nuevamente" },
    };
  }
};

export const loginUser = async (data) => {
    let response


   
    await axios.post(`${url}/login`, data)
        .then((res) => {
            response = res
        }).catch((err) => {
            response = errorCatcher(err)
        })
    return response

}

export const registerUser = async (user) => {
  let response;

  await axios.post(`${url}/register`, user)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = errorCatcher(err);
    });
  return response;
};
