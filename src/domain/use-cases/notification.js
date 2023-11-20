const Notification = require("../entities/Notification");

class NotificationManager {
    constructor(notificationRepository, userManager) {
        this.notificationRepository = notificationRepository;
        this.userManager = userManager;
    }

    createNotification(title, body, author) {
        const notification = new Notification(title, body, author);
        const notifications = this.notificationRepository.create(notification);
        return notifications;
    }

    getFeed(userId) {
        const following = this.userManager.getFollowingById(userId);
        const notifications = this.notificationRepository.getFeed(following);
        return notifications;
    }

    getByUser(id) {
        const notifications = this.notificationRepository.getByUser(id);
        return notifications;
    }
}

module.exports = NotificationManager;