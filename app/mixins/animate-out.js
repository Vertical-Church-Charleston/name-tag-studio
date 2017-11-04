import Mixin from '@ember/object/mixin';
import { later } from '@ember/runloop';

export default Mixin.create({
  actions: {
    willTransition(transition){
      if(!this.controller.get('leaving')){
        transition.abort();
        this.controller.set('leaving',true);
        later(() => {
          transition.retry().then(()=>this.controller.set('leaving',false));
        },310);
      }
    }
  }
});
