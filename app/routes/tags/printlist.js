import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  printList: inject(),
  model() {
    return this.get('printList.list')
  },
});
