import Ember from 'ember';

export default Ember.Route.extend({
    getPage: function(page) {
	return this.store.find('game_list', {page: (page || 1)});
    },
    model: function(params) {
	return this.getPage(params.page);
    },
    actions: {
	getPage: function(page) {
	    var controller = this.controller;
	    this.getPage(page).then(function(model) {
		controller.set('model', model);
		controller.transitionToRoute('games.index', {queryParams: {page: page}});
	    });
	}
    }
});
