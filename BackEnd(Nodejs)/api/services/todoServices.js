//This service file is to accomplish basic CRUD function with MongoDB

'use strict';
const mongoose = require('mongoose');
let Todo = mongoose.model('todoModel');

//Enable get function to find items or list all items
exports.get = function (params) {
    const promise = Todo.find(params).exec();
    return promise;
};

//Enable create function
exports.save = function (item) {
    const newTodo = new Todo(item);
    const promise = newTodo.save();
    return promise;
};

//Enable find function to find specic item by id
exports.find = function (itemId) {
    const promise = Todo.findById(itemId).exec();
    return promise
};

//Enable update function
exports.update = function (itemId,item) {
    const promise = Todo.update({_id: itemId}, item);
    return promise;
};

//Enable delete function
exports.delete = function (itemId) {
    const promise = Todo.remove({_id: itemId});
    return promise;
};
