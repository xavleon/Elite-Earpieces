const express = require("express");

const { doSignup, doLogin } = require("../controllers/authControllers");

const router = express.Router();

router.post("/login", doLogin);
router.post("/signup", doSignup);

module.exports = router;
