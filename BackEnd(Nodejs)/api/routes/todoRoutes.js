//Define routes of the app

'use strict';

module.exports = function(app){
    let todoList = require('../controllers/todolist-controller');

    //Route for the main entrance
    app.route('/todos')
       .get(todoList.list)
       .post(todoList.createTodo);

    //Route for specific todo item
    app.route('/todos/:todoId')
       .get(todoList.readTodo)
       .put(todoList.updateTodo)
       .delete(todoList.deleteTodo);
}