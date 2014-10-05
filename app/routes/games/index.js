import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
	console.log('Page', params.page);
	return this.store.find('game', {page: (params.page || 1)});
    }
});
