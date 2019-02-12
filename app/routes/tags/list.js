import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  notify: service(),
  model() {
    return this.store.findAll('tag').catch((error) => {
      console.log(error);
      let message = 'There was an error connecting to the API';
      if (error.code === 404) {
        message = 'No tags were found'
      }
      this.get('notify').error(message,{
        closeAfter: 5000
      });
      return []
    });
  },

  actions: {
    linkToEditRoute(model){
      this.transitionTo('tags.list.edit',model);
    },
    deleteTag(model){
      model.destroyRecord().then(() => {
        this.get('notify').success('Tag has been deleted',{
          closeAfter: 5000
        });
      });
    },
    doSearch(){

    },
    createTags(tags, firstNameKey, lastNameKey) {
      const modelList = tags.map((tag) => {
        return this.store.createRecord('tag', {
          firstName: tag[firstNameKey],
          lastName: tag[lastNameKey]
        });
      });
      const tagList = this.store.createRecord('taglist', {modelList: modelList});
      tagList.save().then(()=>{
        this.get('notify').success('Tags Created',{
          closeAfter: 5000
        });
        document.getElementById("drop-zone-file").value = "";
        this.controller.set('showDropZone', false);
      }).catch(()=>{
        this.get('notify').danger('There was an error importing CSV',{
          closeAfter: 5000
        });
      });
    }
  }
});
