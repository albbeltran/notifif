class Notification {
    static counter = 0;

    constructor(title, body, authorId, authorName) {
        this.id = ++Notification.counter;
        this.title = title;
        this.body = body;
        this.date = new Date();
        this.authorId = authorId;
        this.authorName = authorName;
    }
}

module.exports = Notification;