import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import wait from 'ember-test-helpers/wait';

moduleForComponent('tag-component', 'Integration | Component | tag component', {
  integration: true,
});

test('it renders first and last name', function(assert) {
  this.set('data',{firstName:"Jordan",lastName:"Riser"});

  this.render(hbs`{{tag-component data=data}}`);

  assert.equal(this.$().find('.first-name').text(), 'Jordan');
  assert.equal(this.$().find('.last-name').text(), 'Riser');
});

test('Buttons only show if "showEditButton" property is set to true', function(assert){
  this.set('data');

  this.render(hbs`{{tag-component data=data}}`);
  assert.equal(this.$().find('.buttons').length, 0);
});
