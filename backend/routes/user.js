const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const { signUpRules, validator } = require("../middleware/validator");
const authAdmin = require("../middleware/authAdmin");
const auth = require("../middleware/auth");

router.post("/register", signUpRules(), validator, userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/getUser", auth, authAdmin, userCtrl.getUser);
router.get("/logout", userCtrl.logout);
router.get("/refresh_token", userCtrl.refreshToken);

module.exports = router;
