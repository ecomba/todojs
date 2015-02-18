"use strict";

describe('A todo item', function() {

  it('has a title', function() {
    var todo = new todos.Todo('a title');
    expect(todo.title).toEqual('a title');
  });

  it('has no title if none is given', function() {
    var todo = new todos.Todo;
    expect(todo.title).toEqual('');
  });

  it('is not done by default', function() {
    var todo = new todos.Todo('not done');
    expect(todo.isDone()).toBeFalsy();
  });

  it('is done when it is marked as done', function() {
     var todo = new todos.Todo('mark as done');
     todo.done();

     expect(todo.isDone()).toBeTruthy();
  });

  it('can be marked as undone if marked done wrongly', function() {
    var todo = new todos.Todo('marking undone');
    todo.done();
    todo.undone();

    expect(todo.isDone()).toBeFalsy();
  });

});

