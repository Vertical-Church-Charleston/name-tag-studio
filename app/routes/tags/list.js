import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('tag');
  },

  actions: {
    linkToEditRoute(model){
      this.transitionTo('tags.list.edit',model);
    }
  }
});
