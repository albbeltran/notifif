class NotificationController {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
    }

    create(req, res) {
        const { title, body, authorId } = req.body;
        const notifications = this.notificationManager.create(title, body, authorId);
        res.send(notifications);
    }

    getFeed(req, res) {
        const id = req.params.id;
        const notifications = this.notificationManager.getFeed(id);
        res.json(notifications);
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