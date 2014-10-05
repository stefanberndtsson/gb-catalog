import Ember from 'ember';

export default Ember.Controller.extend({
    cartridges: function() {
	return this.get('model').get('cartridges');
    }.property('model.cartridges'),
    actions: {
	updateNote: function() {
	    var controller = this;
	    this.get('model').save().then(function(newModel) {
		controller.set('model', newModel);
		controller.set('editingNote', !newModel.get('note'));
	    });
	},
	editNote: function() {
	    this.set('editingNote', true);
	}
    }
});
