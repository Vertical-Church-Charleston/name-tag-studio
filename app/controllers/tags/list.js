import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  printList: inject(),

  savedRecords: computed('model.[]',function(){
    return this.get('model').filter((tag) => !tag.get('isNew'));
  }),

  searchedModel: computed('savedRecords','searchTerm',function(){
    if(!this.get('searchTerm')){
      return this.get('savedRecords');
    }
    return this.get('savedRecords').filter((item)=>{
      var re = new RegExp(`\\b${this.get('searchTerm')}`,'i');
      return item.get('firstName').match(re) || item.get('lastName').match(re);
    })
  }),

  actions: {
    toggleSelection(bool){
      if(bool !== undefined){
        if(bool === true){
          this.get('savedRecords').forEach((item)=>{
            this.get('printList.list').pushObject(item);
          });
        }
      }else{
        if(this.get('printList.list.length') < this.get('searchedModel.length')){
          this.get('searchedModel').forEach((item)=>{
            if(this.get('printList.list').indexOf(item) === -1){
              this.get('printList.list').pushObject(item);
            }
          });
        }else{
          this.get('printList').clearList();
        }
      }
    },
    toggleDropzone(){
      this.set('showDropZone', !this.get('showDropZone'));
    }
  }
});