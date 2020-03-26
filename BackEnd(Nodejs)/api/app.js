'use strict';
module.exports = function (app) {
    //Initialize models
    let todoModel = require('./models/todoModel');

    //Initialize routes
    let todoRoutes = require('./routes/todoRoutes');
    todoRoutes(app);
};