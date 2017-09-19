import Ember from 'ember';

export default Ember.Controller.extend({
 // sortProperties: ['timestamp'],
 // sortAscending: false, // sorts post by timestamp
 actions: {
   saveProduct: function() {
     var newProduct = this.store.createRecord('product', {

       product_name: this.get('product_name'),
       image: this.get('image'),
       quantity: this.get('quantity'),
       category: this.get('category'),
       price: this.get('price'),
       description: this.get('description'),
      //  timestamp: new Date().getTime()
     });
      newProduct.save();
      this.transitionToRoute('success');
   }
 }
});
