const ctrl = {};
const User = require("./models/User");
const Manga = require("./models/Manga");
const fs = require("fs");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

const SECRET_KEY = "TADASHIISALIVE";

cloudinary.config({
  cloud_name: "dpwlcdhwc",
  api_key: "382164977457547",
  api_secret: "vExuATpyB6zXHB5LhzgzfHNfLP0",
});

ctrl.home = async (req, res, next) => {
  res.send("Hello");
};
//register
ctrl.register = async (req, res, next) => {
  let admin = false;
  let id = v4();
  const { username, email, password, adminCode } = req.body;
  console.log(req.body);
  const picture =
    "https://res.cloudinary.com/comicseries/image/upload/v1649827898/imgThumb_svogrq.png";
  const searchUsername = await User.findOne({ username });
  const searchEmail = await User.findOne({ email });
  if (searchUsername) {
    return res.json({
      ok: false,
      message: "Username already taken",
    });
  }
  if (searchEmail) {
    return res.json({
      ok: false,
      message: "Email already taken",
    });
  }
  if (adminCode === "1234") {
    return (admin = true);
  }
  const newUser = new User({ username, email, password, admin, id });
  await newUser.save();

  res.json({ ok: true, username, email, id, admin, picture, id });
};

//login
ctrl.login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).send("Email or Password Incorrect");
  if (user.password !== password)
    return res.status(401).send("Email or Password Incorrect");

  const token = jwt.sign({ _id: user._id }, SECRET_KEY);
  res.status(200).json({ token, user });
};

ctrl.addManga = async (req, res, next) => {
  const { path } = req.file;
  try {
    const data = JSON.parse(req.body);
    const { title, description, ownerId } = data;
    const result = await cloudinary.uploader.upload(path);
    fs.unlink(path);
    const caps = [
      {
        comments: { a: "" },
        images: [],
      },
    ];
    const newSerie = new Manga({ title, description, ownerId, picture: result.url, picture_public_id: result.public_id });
        await newManga.save()
        res.json({
            ok: true,
            message: 'Uploaded successfully'
        })
  } catch (error) {
    fs.unlinkSync(path)
        res.status(400).json({
            ok: false,
            message: 'Error :( '
        });
  }
};

module.exports = ctrl;
