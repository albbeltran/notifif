class UserController {
    constructor(userManager) {
        this.userManager = userManager;
    }

    createUser(req, res) {
        const { name, role } = req.body;
        const user = this.userManager.createUser(name, role);
        res.json(user);
    }
    
    signIn(req, res) {
        const { id } = req.body;
        const user = this.userManager.findUser(id);
        res.send(user);
    }
}

module.exports = UserController;