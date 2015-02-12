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

  todos.List = function() {
    this.todos = [];
  };

  todos.List.prototype.add = function(todo) {
    this.todos.push(todo);
  };

}).call(this);

