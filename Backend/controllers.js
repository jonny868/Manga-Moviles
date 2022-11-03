const ctrl = {}



ctrl.home = async (req,res,next) => {
  res.send('Hello')
}
ctrl.register = async (req,res,next) => {
    let admin = false

    const {username, email, password, adminCode} = req.params;
    console.log(req.params)




}










module.exports = ctrl;