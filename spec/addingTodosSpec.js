"use strict";

describe('Adding todos in the DOM', function() {
  var body;

  beforeAll(function() {
    var todos = document.createElement("section");
    todos.setAttribute("id", "todos");
    body = document.getElementsByTagName('body')[0];
    body.appendChild(todos);
  });

  afterAll(function() {
    body.removeChild(document.getElementById('todos'));
  });
  
  it('adds the field to add todos to the dom', function() {
    todos.init();

    expect(document.getElementById('todos').children[0].tagName).toEqual('INPUT');
  });
});
