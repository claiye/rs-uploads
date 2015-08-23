App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('home');
  this.resource('upload-map');
  this.resource("upload-pic");
}
