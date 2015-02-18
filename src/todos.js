"use strict";

(function() {
  var root = this;
  var previous = root.previous;

  var todos = function() {
  };

  todos.noConflict = function() {
    root.todos = previous;
    return todos;
  };

  if(typeof exports !== 'undefined') {
    if(typeof module !== 'undefined' && module.exports) {
      exports = module.exports = todos;
    }
    exports.todos = todos;
  } else {
    root.todos = todos;
  }

  // TODO's app from here

  todos.init = function() {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'addTodo');
    document.getElementById('todos').appendChild(input);
  };

  todos.Todo = function(title) {
    this.title = title || '';
    this.finished = false;
  };

  todos.Todo.prototype.isDone = function() {
    return this.finished;
  };

  todos.Todo.prototype.done = function() {
    this.finished = true;
  };

  todos.Todo.prototype.undone = function() {
    this.finished = false;
  };

  todos.List = function() {
    this.todos = [];
  };

  todos.List.prototype.add = function(todo) {
    this.todos.push(todo);
  };

}).call(this);

