"use strict";

var todos = require('../src/todos.js');

var chai = require('chai');
var expect = chai.expect;

describe('A todo item', function() {

  it('has a title', function() {
    var todo = new todos.Todo('a title');
    expect(todo.title).to.equal('a title');
  });
});
