import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      firstName: '',
      lastName: '',
      template: 1
    };
  }
});