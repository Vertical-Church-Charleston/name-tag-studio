import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    closePrintList() {
      window.history.back();
    },
    didTransition(){
      if(!this.controller.get('printList.list.length')){
        this.transitionTo('tags.list.index')
      }
    }
  }
});
