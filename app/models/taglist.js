import DS from 'ember-data';

export default DS.Model.extend({
  modelList: DS.hasMany('tag')
});
