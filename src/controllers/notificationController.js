class NotificationController {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
    }

    createNotification(req, res) {
        const { title, body, author } = req.body;
        const notifications = this.notificationManager.createNotification(title, body, author);
        res.send(notifications);
    }
}

module.exports = NotificationController;