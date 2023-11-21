const users = [
    {
        id: 1,
        name: "Max",
        password: "ok",
        role: "alumno"
    },
    {
        id: 2,
        name: "Jorge",
        password: "ok",
        role: "administrativo"
    },
    {
        id: 3,
        name: "Jorge",
        password: "ok",
        role: "administrativo"
    }
]

const follows = [
    { id: 1, followerId: 3, followingId: 1 },
    { id: 2, followerId: 3, followingId: 2 },
    { id: 3, followerId: 1, followingId: 2 }
]

const notifications = [
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
    }
]

module.exports = {
    notifications,
    users,
    follows
}