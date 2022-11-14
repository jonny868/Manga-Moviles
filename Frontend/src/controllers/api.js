import axios, { Axios } from "axios";

const url = "http://10.0.0.115:3000/";

const catchError = async (err) => {
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

//LOGIN
export const loginUser = async (data) => {
  let response;

  const { username, password } = data;

  await axios
    .get(`${url}login/${username}/${password}`)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = catchError(err);
    });
  return response;
};
//REGISTER
export const registerUser = async (data) => {
  let response;

  await axios
    .post(`${url}register`, { data })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = catchError(err);
    });
  return response;
};
