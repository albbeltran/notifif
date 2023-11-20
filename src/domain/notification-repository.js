class NotificationRepository {
    constructor() {
        this.notifications = [
            {
                "id": 1,
                "title": "Posada FIF",
                "body": "Te invitamos a la posada FIFI",
                "author": 2
            },
            {
                "id": 2,
                "title": "Posada FIF",
                "body": "Te invitamos a la posada FIFI",
                "author": 1
            },
            {
                "id": 3,
                "title": "Posada FIF",
                "body": "Te invitamos a la posada FIFI",
                "author": 2
            },
        ];
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
        return this.notifications.filter(notif => notif.author === id)
    }
}

module.exports = NotificationRepository;