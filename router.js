const express = require('express');
const router = express.Router();

// Users
const UserController = require("./src/controllers/userController");
const UserManager = require("./src/domain/use-cases/user");
const UserRepository = require("./src/domain/user-repository");
const AuthService = require("./src/common/auth/auth-service");

const authService = new AuthService();
const userRepository = new UserRepository();

const userManager = new UserManager(userRepository, authService);
const userController = new UserController(userManager);

router.post('/login', (req, res) => userController.signIn(req, res));
router.post('/user', (req, res) => userController.createUser(req, res));
router.post('/follow', (req, res) => userController.addFollow(req, res));

// Notifications
const NotificationController = require("./src/controllers/notificationController");
const NotificationManager = require("./src/domain/use-cases/notification");
const NotificationRepository = require("./src/domain/notification-repository");

const notificationRepository = new NotificationRepository();

const notificationManager = new NotificationManager(notificationRepository);
const notificationController = new NotificationController(notificationManager);

router.post('/notification', (req, res) => notificationController.createNotification(req, res));

module.exports = router;