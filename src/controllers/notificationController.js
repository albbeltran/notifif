class NotificationController {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
    }

    create(req, res) {
        const { title, body, author } = req.body;
        const notifications = this.notificationManager.create(title, body, author);
        res.send(notifications);
    }

    getFeed(req, res) {
        const { id } = req.body;
        const notifications = this.notificationManager.getFeed(id);
        res.send(notifications);
    }

    getByUser(req, res) {
        const id = req.params.id;
        const notifications = this.notificationManager.getByUser(id);
        res.send(notifications);
    }

    remove(req, res) {
        const { id } = req.body;
        const notifications = this.notificationManager.remove(id);
        res.send(notifications);
    }
}

module.exports = NotificationController;