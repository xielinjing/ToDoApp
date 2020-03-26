//This file is to use services and control the app

'use strict';

const todoService = require('../services/todoServices');

//List all the todo items
exports.list = function(req, res){
    const resolve = (todos) => {
        res.status(200);
        res.json(todos);
    };
    todoService.get({})
        .then(resolve)
        .catch(renderErrorResponse(res));
};

//Create new todo item
exports.createTodo = function(req, res) {
    const newTodo = Object.assign({}, req.body);
    const resolve = (todo) => {
        res.status(200);
        res.json(todo);
    };
    todoService.save(newTodo)
        .then(resolve)
        .catch(renderErrorResponse(res));
  };
  
//Read/get specific todo item
exports.readTodo = function(req, res) {
    const resolve = (todo) => {
        res.status(200);
        res.json(todo);
    };
    todoService.find(req.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

//Update todo item
exports.updateTodo = function(req, res) {

    const todo = Object.assign({}, req.body);
    const resolve = (todo) => {
        res.status(200);
        res.json(todo);
    };
    todoService.update(req.params.todoId, req.body)
        .then(resolve)
        .catch(renderErrorResponse(res));
  };


//Delete todo item
exports.deleteTodo = function(req, res) {
    const resolve = (todo) => {
        res.status(200);
        res.json({
            message: 'Todo Successfully deleted'
        });
    };
    todoService.delete(req.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(res));

  };

  let renderErrorResponse = (res) => {
    const errorCallback = (error) => {
        if (error) {
            res.status(500);
            res.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};