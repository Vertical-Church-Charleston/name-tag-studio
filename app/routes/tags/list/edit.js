import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  notify: service(),
  model(params){
    return this.store.find('tag',params.id);
  },
  actions: {
    error: function(reason) {
      if (reason.status == 404)
        return true
      else
        this.get('notify').error('This tag does not exist',{
          closeAfter: 10000
        });
        this.transitionTo('tags.list');
    },
  },
});
