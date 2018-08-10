import $ from 'jquery';
import Route from '@ember/routing/route';
import AnimateOutMixin from 'name-tags/mixins/animate-out';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default Route.extend(AnimateOutMixin,{
  printList: service(),
  notify: service(),
  model(){
    return {
      firstName: '',
      lastName: ''
    };
  },
  actions: {
    create(){
      this.controller.set('creatingTag', true);
      let tagComponent = $('.display-section .tag-component');
      let printListComponent = $('.print-list');
      later(() => {
        var newTag = this.store.createRecord('tag',this.controller.get('model'));
        newTag.save().then(()=>{
          this.controller.set('creatingTag', false);
          tagComponent.animate({
            'top': (printListComponent.offset().top - tagComponent.offset().top + 25) - (tagComponent.outerHeight() / 2),
            'left': (printListComponent.offset().left - tagComponent.offset().left + 25) - (tagComponent.outerWidth() / 2)
          }, 350, 'swing', () => {
            later(() => {
              tagComponent.css({
                'opacity': 0,
                'top': 0,
                'left': 0,
                'transform': 'scale(1) translateY(-100vh)'
              });
              later(() => {
                tagComponent.css({
                  'opacity': 1,
                  'transform': 'translateY(0)'
                });
              },150);
            },250);
          }).css({
            'transform': 'scale(0.09)'
          });
          this.get('printList.list').pushObject(newTag);
          this.controller.set('model',{
            firstName: '',
            lastName: ''
          });
        }).catch((error) => {
          this.controller.set('creatingTag', false);
          this.get('notify').danger('There was an error creating nametag',{
            closeAfter: 5000
          });
        });
      }, 350);
    }
  }
});
