const Notification = require("../entities/Notification");

class NotificationManager {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    createNotification(title, body, author) {
        const notification = new Notification(title, body, author);
        const notifications = this.notificationRepository.create(notification);
        return notifications;
    }
}

module.exports = NotificationManager;