import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.store.find('tag',params.id);
  },
  actions: {
    error: function(reason) {
      if (reason.status == 404)
        return true
      else
        this.transitionTo('tags.list');
    },
  },
});
