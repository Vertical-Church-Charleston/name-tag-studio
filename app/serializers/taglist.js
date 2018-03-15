import DS from 'ember-data';
import SaveRelationshipsMixin from 'ember-data-save-relationships';

export default DS.JSONAPISerializer.extend(SaveRelationshipsMixin, {
  attrs: {
    modelList: { serialize: true }
  }
});
