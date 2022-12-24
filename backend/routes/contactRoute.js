const express=require("express");
const { SendMessage } = require("../controllers/contactController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router=express.Router();

router.route("/contact").post( isAuthenticatedUser, SendMessage);