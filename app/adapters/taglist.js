import ApplicationAdapter from 'name-tags/adapters/application';

export default ApplicationAdapter.extend({
  urlForCreateRecord() {
    return `${this.urlPrefix()}/taglist`;
  }
});