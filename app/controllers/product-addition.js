import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: true, // sorts post by timestamp
  actions: {
    saveProduct: function() {
      var newProduct = this.store.createRecord('product', {
        pName: this.get('productName'),
        image: this.get('image'),
        description: this.get('description'),
        details:this.get('details'),
        category:this.get('category'),
        price:this.get('price'),
        timestamp: new Date().getTime()
      });
      newProduct.save();
      this.transitionToRoute('success');
      }
    }
});
