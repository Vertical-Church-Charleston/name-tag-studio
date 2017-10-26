import DS from 'ember-data';
import ENV from 'name-tags/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.apiUrl,
  namespace: ENV.APP.apiNameSpace,
});