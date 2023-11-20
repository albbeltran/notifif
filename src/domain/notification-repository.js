class NotificationRepository {
    constructor() {
        this.notifications = [];
    }

    create(notification) {
        this.notifications.push(notification);
        return this.notifications;
    }
}

module.exports = NotificationRepository;