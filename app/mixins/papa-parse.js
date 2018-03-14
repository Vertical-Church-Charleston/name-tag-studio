import Mixin from '@ember/object/mixin';
import { once } from '@ember/runloop';

export default Mixin.create({
  actions: {
    parseCsv: function() {
      const config = this.config,
      selector = this.selector || 'input[type=file]';

      this.$(selector).parse({
        config: config,

        before: (file, element) => {
          once(() => {
            this.send('before', file, element);
          });
        },

        error: (error, file, element) => {
          once(() => {
            this.send('error', error, file, element);
          });
        },

        complete: (results, file, element, event) => {
          once(() => {
            this.send('complete', results, file, element, event);
          });
        }
      });
    }
  }
});