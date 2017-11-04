import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  printList: inject(),
  classNames: ['tag-component'],
  classNameBindings: ['templateName'],
  attributeBindings: ['backgroundImage:style'],

  templateName: computed('data.template',function(){
    return `template-${this.get('data.template')}`;
  }),
  backgroundImage: computed('data.template',function(){
    return `background-image: url('/images/name-tag-backs/name-tag-${this.get('data.template')}.svg')`;
  }),

  click() {
    this.get('printList.list').pushObject(this.get('data'));
  },

  actions: {
    editButtonClicked() {
      this.sendAction('onEditButtonClicked',this.get('data'));
    },
    deleteButtonClicked() {
      this.sendAction('onDeleteButtonClicked',this.get('data'));
    }
  }
});