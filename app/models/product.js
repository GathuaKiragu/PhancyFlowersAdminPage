import DS from 'ember-data';

export default DS.Model.extend({
  product_name: DS.attr('string'),
  image: DS.attr('string'),
  quantity: DS.attr('number'),
  category: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string')
});
// product_name: this.get('product_name'),
// description: this.get('description'),
// category: this.get('category'),
// price: this.get('price'),
// image: this.get('image'),
// timestamp: new Date().getTime(ription: this.get('description'),
