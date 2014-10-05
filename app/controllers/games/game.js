import Ember from 'ember';

export default Ember.ObjectController.extend({
    cartridge_count: function() {
	return this.get('model.data.cartridges').length;
    }.property('cartridges')
});
