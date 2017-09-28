import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('add-product');
  this.route('product-addition');
  this.route('success');
  this.route('available-products');
});

export default Router;
