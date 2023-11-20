const { notifications } = require("../../data");

class NotificationRepository {
    constructor() {
        this.notifications = notifications;
    }

    create(notification) {
        this.notifications.push(notification);
        return this.notifications;
    }

    getFeed(following) {
        return this.notifications.filter(notif => {
            let post;
            following.forEach(user => post = notif.author === user.id);
            return post;
        })
    }

    getByUser(id) {
        return this.notifications.filter(notif => notif.author === Number(id))
    }

    remove(idToRemove) {
        this.notifications = this.notifications.filter(notif => notif.id !== idToRemove);
        return this.notifications;
    }
}

module.exports = NotificationRepository;