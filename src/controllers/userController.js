class UserController {
    constructor(userManager) {
        this.userManager = userManager;
    }

    create(req, res) {
        const { id, name, password, role } = req.body;
        const users = this.userManager.create(id, name, password, role);
        res.send(users);
    }

    async signIn(req, res) {
        const { id, password } = req.body;
        const user = await this.userManager.signIn(id, password);
        res.json(user);
    }

    getById(req, res) {
        const id = req.params.id;
        const user = this.userManager.getById(id);
        res.send(user);
    }

    getAllUsers(req, res) {
        const users = this.userManager.getAllUsers();
        res.send(users);
    }

    addFollow(req, res) {
        const { id, authorId } = req.body;
        const user = this.userManager.addFollow(id, authorId);
        res.send(user);
    }

    removeFollow(req, res) {
        const visitorId = req.params.visitorId;
        const profileId = req.params.profileId;
        const follows = this.userManager.removeFollow(visitorId, profileId);
        res.send(follows);
    }

    getFollowingById(req, res) {
        const id = req.params.id;
        const users = this.userManager.getFollowingById(id);
        res.send(users);
    }

    getAllFollows(req, res) {
        const follows = this.userManager.getAllFollows();
        res.send(follows);
    }

    isFollowing(req, res) {
        const visitorId = req.params.visitorId;
        const profileId = req.params.profileId;
        const isFollowing = this.userManager.isFollowing(visitorId, profileId);
        res.send(isFollowing);
    }
}

module.exports = UserController;