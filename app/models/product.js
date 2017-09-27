import DS from 'ember-data';

export default DS.Model.extend({
  product_name: DS.attr('string'),
  image: DS.attr('string'),
  description: DS.attr('string'),
  details: DS.attr('string'),
  price: DS.attr('number'),
  timestamp: DS.attr('date')
});
// product_name: this.get('product_name'),
// description: this.get('description'),
// category: this.get('category'),
// price: this.get('price'),
// image: this.get('image'),
// timestamp: new Date().getTime(ription: this.get('description'),
