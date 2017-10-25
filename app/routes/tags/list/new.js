import Route from '@ember/routing/route';

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
    }
  }
});
