import Ember from 'ember';

export default Ember.ArrayController.extend({
    queryParams: ['page'],
    itemController: 'games.game',
    sortProperties: ['title'],
    prevPage: function() {
	var page = this.get('model.meta.pagination.page');
	if(page === 1) {
	    return null;
	}
	return page - 1;
    }.property('model.meta.pagination.page'),
    nextPage: function() {
	var page = this.get('model.meta.pagination.page');
	var pages = this.get('model.meta.pagination.pages');
	if(page === pages) {
	    return null;
	}
	return page + 1;
    }.property('model.meta.pagination.page', 'model.meta.pagination.pages'),
    pageArray: function() {
	var pArray = [];
	for(var i=0;i<this.get('model.meta.pagination.pages');i++) {
	    var p = {page: i+1};
	    if(this.get('model.meta.pagination.page') === i+1) {
		p['active'] = true;
	    }
	    pArray.push(p);
	}
	return Ember.ArrayProxy.create({content: Ember.A(pArray)});
    }.property('model.meta.pagination.pages', 'model.meta.pagination.page'),
    actions: {
    }
});
