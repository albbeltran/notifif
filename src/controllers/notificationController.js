class NotificationController {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
    }

    createNotification(req, res) {
        const { title, body, author } = req.body;
        const notifications = this.notificationManager.createNotification(title, body, author);
        res.send(notifications);
    }

    getFeed(req, res) {
        const { id } = req.body;
        const notifications = this.notificationManager.getFeed(id);
        res.send(notifications);
    }

    getNotificationByUser(req, res) {
        const { id } = req.body;
        const notifications = this.notificationManager.getByUser(id);
        res.send(notifications);
    }

    removeNotification(req, res) {
        const { id } = req.body;
        const notifications = this.notificationManager.removeNotification(id);
        res.send(notifications);
    }
}

module.exports = NotificationController;