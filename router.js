const express = require('express');
const router = express.Router();

// Users
const UserController = require("./src/controllers/userController");
const UserManager = require("./src/domain/use-cases/user");
const UserRepository = require("./src/data-access/user-repository");
const AuthService = require("./src/common/auth/auth-service");

const authService = new AuthService();
const userRepository = new UserRepository();

const userManager = new UserManager(userRepository, authService);
const userController = new UserController(userManager);

router.post('/login', (req, res) => userController.signIn(req, res));
router.post('/user', (req, res) => userController.create(req, res));
router.get('/user', (req, res) => userController.getAllUsers(req, res));
router.post('/follow', (req, res) => userController.addFollow(req, res));
router.get('/follow/:id', (req, res) => userController.getFollowingById(req, res));
router.get('/follow', (req, res) => userController.getAllFollows(req, res));
router.get('/user/:id', (req, res) => userController.getById(req, res))
router.get('/user/:visitorId/follow/:profileId', (req, res) => userController.isFollowing(req, res));
router.delete('/user/:visitorId/follow/:profileId', (req, res) => userController.removeFollow(req, res));

// Notifications
const NotificationController = require("./src/controllers/notificationController");
const NotificationManager = require("./src/domain/use-cases/notification");
const NotificationRepository = require("./src/data-access/notification-repository");

const notificationRepository = new NotificationRepository();

const notificationManager = new NotificationManager(notificationRepository, userManager);
const notificationController = new NotificationController(notificationManager);

router.post('/notification', (req, res) => notificationController.create(req, res));
router.get('/:id', (req, res) => notificationController.getFeed(req, res));
router.get('/user/:id/notification', (req, res) => notificationController.getByUser(req, res));
router.delete('/notification', (req, res) => notificationController.remove(req, res));

module.exports = router;