import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  printList: inject(),

  searchedModel: computed('model.[]','searchTerm',function(){
    if(!this.get('searchTerm')){
      return this.get('model');
    }
    return this.get('model').filter((item)=>{
      var re = new RegExp(`\\b${this.get('searchTerm')}`,'i');
      return item.get('firstName').match(re) || item.get('lastName').match(re);
    })
  }),
});