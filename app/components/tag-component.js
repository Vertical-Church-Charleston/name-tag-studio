import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  printList: inject(),
  classNames: ['tag-component'],
  classNameBindings: ['tagIsInPrintList:active'],
  attributeBindings: ['backgroundImage:style'],

  backgroundImage: `background-image: url('/images/name-tag.png')`,

  tagIsInPrintList: computed('printList.list.[]',function(){
    return this.get('printList.list').indexOf(this.get('data')) > -1;
  }),

  actions: {
    tagClicked(){
      if(this.get('tagIsInPrintList')){
        this.get('printList.list').removeObject(this.get('data'));
      }else{
        this.get('printList.list').pushObject(this.get('data'));
      }
    },
    editButtonClicked() {
      this.sendAction('onEditButtonClicked',this.get('data'));
    },
    deleteButtonClicked() {
      this.get('printList.list').removeObject(this.get('data'));
      this.sendAction('onDeleteButtonClicked',this.get('data'));
    }
  }
});