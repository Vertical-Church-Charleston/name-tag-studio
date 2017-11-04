import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  notify: service(),
  model() {
    return this.store.findAll('tag');
  },

  actions: {
    linkToEditRoute(model){
      this.transitionTo('tags.list.edit',model);
    },
    deleteTag(model){
      model.destroyRecord().then(() => {
        this.get('notify').success('Tag has been deleted',{
          closeAfter: 5000
        });
      });
    }
  }
});
