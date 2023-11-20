class Notification {
    static counter = 0;

    constructor(title, body, author) {
        this.id = ++Notification.counter;
        this.title = title;
        this.body = body;
        this.date = new Date();
        this.author = author;
    }
}

module.exports = Notification;