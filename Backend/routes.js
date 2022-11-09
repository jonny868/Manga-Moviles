const {Router} = require('express')
const {home, register, login, addManga} = require('./controllers')
const multer = require('multer')

const storageCfg = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname) )
    }
})

const uploadItem = multer({
    storage:storageCfg,
})


const router = Router();




router.get('/', home)
router.post('/register',register)
router.post('/login',login)
router.post('/addManga', uploadItem.single("image"), addManga)

module.exports = router