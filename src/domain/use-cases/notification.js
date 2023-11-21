const Notification = require("../entities/Notification");

class NotificationManager {
    constructor(notificationRepository, userManager) {
        this.notificationRepository = notificationRepository;
        this.userManager = userManager;
    }

    create(title, body, authorId) {
        const authorName = this.userManager.getById(authorId).name;
        const notification = new Notification(title, body, authorId, authorName);
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

    remove(notifId) {
        const notifications = this.notificationRepository.remove(notifId);
        return notifications;
    }
}

module.exports = NotificationManager;