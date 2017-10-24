import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import wait from 'ember-test-helpers/wait';

moduleForComponent('tag-component', 'Integration | Component | tag component', {
  integration: true
});

test('it renders first and last name', function(assert) {
  this.set('data',{firstName:"Jordan",lastName:"Riser"});

  this.render(hbs`{{tag-component data=data}}`);

  assert.equal(this.$().find('.first-name').text(), 'Jordan');
  assert.equal(this.$().find('.last-name').text(), 'Riser');
});

test('it sets a class to render a name tag background', function(assert) {
  this.set('data',{template:1});

  this.render(hbs`{{tag-component data=data}}`);
  assert.dom(this.$()).hasClass('template-1');
});