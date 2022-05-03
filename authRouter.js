const Router = require("express");
const router = new Router();
const authMiddlewa = require("./middleware/authMiddlewa");
const rolehMiddlewa = require("./middleware/roleMiddleware");
const authController = require("./authController");
const { check } = require("express-validator");

router.post(
  "/registration",
  [
    check("username", "Имя пользовтаеля не должно быть пустым").notEmpty(),
    check("password", "Пороль больше 3, но меньше 8 символов").isLength({
      min: 3,
      max: 8,
    }),
  ],
  authController.registration
);
router.post("/login", authController.login);
router.get("/users", rolehMiddlewa(["USER"]), authController.getUsers);

module.exports = router;
