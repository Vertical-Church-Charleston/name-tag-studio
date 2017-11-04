import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main',{path:'/'})
  this.route('tags',function(){
    this.route('list',{path:'/'},function(){
      this.route('new');
      this.route('edit',{path:'edit/:id'});
      this.route('print');
    });
  });
});

export default Router;
