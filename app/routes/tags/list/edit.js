import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AnimateOutMixin from 'name-tags/mixins/animate-out';

export default Route.extend(AnimateOutMixin,{
  notify: service(),
  model(params){
    return this.store.find('tag',params.id);
  },
  destroyModel: function () {
    if(this.controller.get('model.hasDirtyAttributes')){
      this.controller.get('model').rollbackAttributes();
    }
  }.on('deactivate'),
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
    update(){
      this.controller.get('model').save().then(()=> this.transitionTo('tags.list'));
    }
  },
});
