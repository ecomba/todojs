"use strict";

describe('A todo list', function() {
  var list;

  beforeEach(function() {
    list = new todos.List;
  });

  it('contains no items at first', function() {
    expect(list.todos).toEqual([]);
  });

  it('can add a todo to the list', function() {
    var item = new todos.Todo;
    list.add(item);
    expect(list.todos).toEqual([item]);
  });
});

