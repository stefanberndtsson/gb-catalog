import Ember from 'ember';

export default Ember.Controller.extend({
    cartridges: function() {
	return this.get('model').get('cartridges');
    }.property('model.cartridges')
});
