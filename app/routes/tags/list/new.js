import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default Route.extend({
  model(){
    return {
      firstName: '',
      lastName: '',
      template: 1
    };
  },
  actions: {
    create(){
      var newTag = this.store.createRecord('tag',this.controller.get('model'));
      newTag.save().then(()=>{
        this.controller.get('printList').pushObject(newTag);
        this.controller.set('model',{
          firstName: '',
          lastName: '',
          template: 1
        });
      });
    },
    willTransition(transition){
      if(!this.controller.get('leaving')){
        transition.abort();
        this.controller.set('leaving',true);
        later(() => {
          transition.retry().then(()=>this.controller.set('leaving',false));
        },310);
      }
    }
  }
});
