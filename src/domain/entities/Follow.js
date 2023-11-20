class Follow {
    static counter = 0;

    constructor(followerId, followingId) {
        this.id = ++Follow.counter;
        this.followerId = followerId;
        this.followingId = followingId;
    }
}

module.exports = Follow;