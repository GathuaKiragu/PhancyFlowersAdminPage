import DS from 'ember-data';

export default DS.Model.extend({
  product_name: DS.attr(),
  picture: DS.attr(),
  quantity: DS.attr(),
  price: DS.attr(),
  description: DS.attr()
});
