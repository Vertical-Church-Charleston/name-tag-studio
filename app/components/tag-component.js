import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['tag-component'],
  classNameBindings: ['templateName'],

  templateName: computed('data.template',function(){
    return `template-${this.get('data.template')}`;
  })
});
