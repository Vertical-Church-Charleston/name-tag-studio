import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notify: service(),
  classNames: ['drop-zone'],
  classNameBindings: ['show'],

  setupWindowDragEventListener: function() {
    this.set('isDragging', false);
  }.on('didInsertElement'),

  parse(file) {
    Papa.parse(file,{
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        if(results.errors.length > 0){
          this.get('notify').danger('There was an error reading the file',{
            closeAfter: 5000
          });
        }else{
          let firstNameKey, lastNameKey;
          Object.keys(results.data[0]).forEach((key) => {
            if (['first name', 'firstname', 'first-name', 'first_name', 'fname', 'first'].indexOf(key.toLowerCase()) > -1) {
              firstNameKey = key;
            }
            if (['last name', 'lastname', 'last-name', 'last_name', 'lname', 'last'].indexOf(key.toLowerCase()) > -1) {
              lastNameKey = key;
            }
          });
          if (firstNameKey && lastNameKey) {
            this.sendAction('onDataReceived', results.data, firstNameKey, lastNameKey);
          } else {
            this.get('notify').danger('Could not find First Name or Last Name CSV heading',{
              closeAfter: 5000
            });
          }
        }
      }
    })
  },

  dragOver(e) {
    e.preventDefault();
    this.set('isDragging', true);
  },

  dragLeave() {
    this.set('isDragging', false);
  },

  drop(e) {
    e.preventDefault();
    this.set('isDragging', false);
    const file = e.dataTransfer.files[0];

    this.parse(file)
  },

  actions: {
    handleFileChange(e){
      e.preventDefault();
      const file = e.target.files[0];
      
      this.parse(file);
    }
  }
});