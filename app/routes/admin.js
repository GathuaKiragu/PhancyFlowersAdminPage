import Ember from 'ember';

export default Ember.Route.extend({
  


// Firebase Logout function
actions: {
  logout: function() {
  this.get('session').close().then(function() {
      this.transitionTo('index');
  }.bind(this));
}
}

});
