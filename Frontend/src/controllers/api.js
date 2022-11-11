import { Axios } from "axios"


const url = "http://localhost:3000/api/"

const errorCatcher = async (err) => {
    /// Error  
    if (err.response) {
        console.log(err.response.data.msg)
        return err.response
        /// Error de mala conexion
    } else if (err.request) {
        // console.log(err.request)
        return { data: { msg: "No se ha contactado con el servidor, revise su conexion a internet y vuelva a intentarlo" } }
        /// Error inesperado
    } else {
        console.log("Error", err.message)
        return { data: { msg: "Ha ocurrido un error inesperado, intente nuevamente" } }
    }
}


export const registerUser = async (user) => {
    let response 

    await Axios.post(`${url}register`, {data}).then(res=>{
        response = res
    }).catch(err => {
        response = errorCatcher(err)
    })
    return response;

}