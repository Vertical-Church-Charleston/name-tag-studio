import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['tag-component'],
  classNameBindings: ['templateName'],
  attributeBindings: ['backgroundImage:style'],

  templateName: computed('data.template',function(){
    return `template-${this.get('data.template')}`;
  }),
  backgroundImage: computed('data.template',function(){
    return `background-image: url('images/name-tag-backs/name-tag-${this.get('data.template')}.svg')`;
  })
});
