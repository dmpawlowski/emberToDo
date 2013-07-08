App = Ember.Application.create();

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
});

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.ToDo.find();
  }
});

App.IndexController = Ember.ObjectController.extend({
  addTask: function (){
    alert("add task");
  }
});

App.ToDo = DS.Model.extend({
  task: DS.attr('string'),
  completed: DS.attr('boolean')
});

App.ToDo.FIXTURES =[{
  id: 1,
  task: "Eat Dinner",
  completed: false
}]

