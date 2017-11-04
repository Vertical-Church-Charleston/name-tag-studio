import Route from '@ember/routing/route';
import AnimateOutMixin from 'name-tags/mixins/animate-out';
import { inject } from '@ember/service';

export default Route.extend(AnimateOutMixin,{
  printList: inject(),
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
        this.get('printList.list').pushObject(newTag);
        this.controller.set('model',{
          firstName: '',
          lastName: '',
          template: 1
        });
      });
    }
  }
});
