import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('index');
    }
  },


// Firebase Logout function
actions: {
  logout: function() {
  this.get('session').close().then(function() {
      this.transitionTo('index');
  }.bind(this));
}
}

});
