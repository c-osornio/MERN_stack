const PizzaController = require('../controllers/pizza.controller');

module.exports = app => {
    // CREATE
    app.post('/api/pizzas', PizzaController.create);

    // READ
    app.get('/api/pizzas', PizzaController.getAll);
    app.get('/api/pizzas/:id', PizzaController.getOne);

    // UPDATE
    app.put('/api/pizzas/:id', PizzaController.update);

    // DELETE
    app.delete('/api/pizzas/:id', PizzaController.delete);
}