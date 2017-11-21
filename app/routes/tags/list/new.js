import $ from 'jquery';
import Route from '@ember/routing/route';
import AnimateOutMixin from 'name-tags/mixins/animate-out';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default Route.extend(AnimateOutMixin,{
  printList: service(),
  model(){
    return {
      firstName: '',
      lastName: '',
      template: 1
    };
  },
  actions: {
    create(){
      let tagComponent = $('.display-section .tag-component');
      let printListComponent = $('.print-list');
      // console.log(tagComponent.offset().top - $(window).scrollTop());
      tagComponent.animate({
        'top': (printListComponent.offset().top - tagComponent.offset().top + 25) - (tagComponent.outerHeight() / 2),
        'left': (printListComponent.offset().left - tagComponent.offset().left + 25) - (tagComponent.outerWidth() / 2)
      }, 350, 'swing').css({
        'transform': 'scale(0.09)'
      });
      later(() => {
        var newTag = this.store.createRecord('tag',this.controller.get('model'));
        newTag.save().then(()=>{
          this.get('printList.list').pushObject(newTag);
          this.controller.set('model',{
            firstName: '',
            lastName: '',
            template: 1
          });
          later(() => {
            tagComponent.css({
              'opacity': 0,
              'top': 'initial',
              'left': 'initial',
              'transform': 'scale(1) translateY(-100vh)'
            });
            later(() => {
              tagComponent.css({
                'opacity': 1,
                'transform': 'translateY(0)'
              });
            },150);
          },250);
        });
      }, 350);
    }
  }
});
