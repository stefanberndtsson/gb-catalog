import Ember from 'ember';

export default Ember.Route.extend({
    getPage: function(page) {
	return this.store.find('game', {page: (page || 1)}).then(function(games) {
	    games.forEach(function(item) {
		item.transitionTo('empty');
	    });
	    return games;
	});
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
