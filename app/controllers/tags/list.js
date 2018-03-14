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

  actions: {
    toggleSelection(bool){
      if(bool !== undefined){
        if(bool === true){
          this.get('model').forEach((item)=>{
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
    },
    receivedFile(file) {
      console.log(file);
    }
  }
});