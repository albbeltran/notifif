const express = require('express');
const router = express.Router();

const UserController = require("./src/controllers/userController");
const UserManager = require("./src/domain/use-cases/user");
const UserRepository = require("./src/domain/user-repository");

const userRepository = new UserRepository();
const userManager = new UserManager(userRepository)
const userController = new UserController(userManager);

router.post('/login', (req, res) => userController.signIn(req, res));

module.exports = router;