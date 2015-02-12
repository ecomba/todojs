"use strict";

var todos = require('../src/todos.js');

var chai = require('chai');
var expect = chai.expect;

describe('A todo item', function() {

  it('has a title', function() {
    var todo = new todos.Todo('a title');
    expect(todo.title).to.equal('a title');
  });

  it('has no title if none is given', function() {
    var todo = new todos.Todo;
    expect(todo.title).to.equal('');
  });

  it('is not done by default', function() {
    var todo = new todos.Todo('not done');
    expect(todo.isDone()).to.be.false;
  });

  it('is done when it is marked as done', function() {
     var todo = new todos.Todo('mark as done');
     todo.done();

     expect(todo.isDone()).to.be.true;
  });

});

