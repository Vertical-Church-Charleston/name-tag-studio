import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'button',
  classNames: ['loading-button btn'],
  classNameBindings: ['buttonSize','block:btn-block','buttonColor','working'],
  attributeBindings: ['buttonType:type','working:disabled'],

  buttonSize: computed('size',function(){
    switch(this.get('size')){
      case 'small':
        return 'btn-sm';
      case 'extra-small':
        return 'btn-xs';
      case 'large':
        return 'btn-lg';
      default:
        return '';
    }
  }),
  buttonColor: computed('color',function(){
    switch(this.get('color')){
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'success':
        return 'btn-success';
      case 'error':
        return 'btn-error';
      default:
        return 'btn-light';
    }
  }),
  buttonType: computed('type',function(){
    if (this.get('type')) {
      return this.get('type');
    } else {
      return 'button';
    }
  }),
});
