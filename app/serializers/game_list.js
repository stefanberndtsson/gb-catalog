import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
    extractArray: function(store, type, payload) {
	payload = {game_lists: payload.games};
	return this._super(store, type, payload);
    }
});
