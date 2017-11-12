import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    closePrintList() {
      window.history.back();
    }
  }
});
