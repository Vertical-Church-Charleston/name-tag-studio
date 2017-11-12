import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  printList: inject(),
  classNames: ['tag-component'],
  classNameBindings: ['templateName','tagIsInPrintList:active'],
  attributeBindings: ['backgroundImage:style'],

  templateName: computed('data.template',function(){
    return `template-${this.get('data.template')}`;
  }),
  backgroundImage: computed('data.template',function(){
    return `background-image: url('/images/name-tag-backs/name-tag-${this.get('data.template')}.svg')`;
  }),

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
      this.sendAction('onDeleteButtonClicked',this.get('data'));
    }
  }
});