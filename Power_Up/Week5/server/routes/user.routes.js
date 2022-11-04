const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users', UserController.getAll);
    app.post('/api/users', UserController.create);
    app.get('/api/users/:id', UserController.getOne);
    app.put('/api/users/:id', UserController.update);
    app.delete('/api/users/:id', UserController.delete);
}