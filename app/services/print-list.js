import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  listIds: computed('list.[]', function(){
    return this.get('list').mapBy('id');
  }),
  init() {
    this._super(...arguments);
    this.list = [];
  }
});
