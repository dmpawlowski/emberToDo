App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 13,
  adapter: 'DS.LSAdapter'
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

  isEditing: false,

  edit: function(){
    this.set("isEditing", true);
    console.log('yay');
  },

  addTask: function (){
    var task = this.get("task");
    App.ToDo.createRecord({
      task: task,
      completed: false
    });
    this.set("task", "");
    this.get("store").commit();
  }

});

App.ToDo = DS.Model.extend({
  task: DS.attr('string'),
  completed: DS.attr('boolean'),

  completedChanged: Ember.observer(function() {
    this.get("store").commit();
  }, 'completed')
});

App.FocusedTaskField = Em.TextField.extend({
  didInsertElement: function(){
    this.$().focus();
  }
});

App.EditView = Em.TextField.extend({
  classNames: ['edit'],
  valueBinding: 'App.ToDo.task',
});

App.ToDo.FIXTURES =[{
  id: 1,
  task: "Eat Dinner",
  completed: false
}]

