import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
	return this.store.find('game', params.id);
    },
    setupController: function(controller, model) {
	controller.set('model', model);
	controller.set('editingNote', !model.get('note'));
    }
});
