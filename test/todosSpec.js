"use strict";

var todos = require('../src/todos.js');

var chai = require('chai');
var expect = chai.expect;

describe('A todo list', function() {
  var list;

  beforeEach(function() {
    list = new todos.List;
  });

  it('contains no items at first', function() {
    expect(list.todos).to.be.empty;
  });

  it('can add a todo to the list', function() {
    list.add(new todos.Todo);
    expect(list.todos).not.to.be.empty;
  });
});

