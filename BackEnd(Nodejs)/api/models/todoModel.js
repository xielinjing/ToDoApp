//To define todo model in MongoDB

"use strict";

var mongoose = require('mongoose');

//Define the schema
var todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isFinished: {
        type: Boolean,
        default:false
    },
    DueDate: String,
    DueTime: String
});

//link the model with schema
var todoModel = mongoose.model("todoModel", todoSchema);

module.exports = todoModel;
