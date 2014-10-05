import DS from 'ember-data';

export default DS.Model.extend({
    casing: DS.attr('string'),
    code: DS.attr('string'),
    note: DS.attr('string'),
    game: DS.belongsTo('game')
});
